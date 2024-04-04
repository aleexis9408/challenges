import {useState} from 'react';

export const usePoins = (): [GetData, ResponseDispatch] => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const handleGetData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://6222994f666291106a29f999.mockapi.io/api/v1/products',
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  return [handleGetData, {data, isLoading, isError}];
};

type GetData = () => void;
interface ResponseDispatch {
  data: Product[];
  isLoading: boolean;
  isError: boolean;
}

export interface Product {
  createdAt: string;
  product: string;
  points: number;
  image: string;
  is_redemption: boolean;
  id: string;
}
