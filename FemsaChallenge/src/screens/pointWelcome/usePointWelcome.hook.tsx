import {useEffect, useMemo, useState} from 'react';
import {Product, usePoins} from '../../services/usePoints';

export const usePointWelcome = (): ResponseHook => {
  const [getData, {isLoading, isError, data}] = usePoins();
  const [typePoint, setTypePoint] = useState<pointsType>(pointsType.all);

  useEffect(() => {
    getData();
  }, []);

  const dataFilter = useMemo(() => {
    if (pointsType.all !== typePoint) {
      return data.filter(
        ({is_redemption}) =>
          (typePoint === pointsType.accumulate && !is_redemption) ||
          (typePoint === pointsType.redeem && is_redemption),
      );
    }
    return data;
  }, [typePoint, data]);

  const totalPoints = useMemo(() => {
    let total = 0;
    if (!isLoading && data) {
      total = data?.reduce((valor: number, {points, is_redemption}) => {
        if (is_redemption) {
          return valor - points ?? 0;
        }
        return valor + points ?? 0;
      }, 0);
    }
    return total;
  }, [data, isLoading]);

  return {
    totalPoints,
    isLoading,
    isError,
    data: dataFilter,
    setTypePoint,
    typePoint,
  };
};

interface ResponseHook {
  totalPoints: number;
  isLoading: boolean;
  isError: boolean;
  data: Product[];
  setTypePoint(type: pointsType): void;
  typePoint: pointsType;
}

export enum pointsType {
  all = 'all',
  redeem = 'redeem',
  accumulate = 'accumulate',
}
