import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {PageTemplate} from '../../components/templates/pageTemplate';
import {styles} from './pointWelcome.styleSheet';
import {pointsType, usePointWelcome} from './usePointWelcome.hook';
import {Skeleton} from './pointWelcome.skeleton';
import {ProductList} from '../../components/molecules/productList';
import {MothCurrent} from '../../utils/formateDate';
import {formatPoint} from '../../utils/formatePoint';
import {Button} from '../../components/atoms/Button';

export const PointWelcome = () => {
  const {totalPoints, isLoading, data, setTypePoint, typePoint} =
    usePointWelcome();

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <PageTemplate scrollview={false}>
      <View style={styles.container}>
        <View style={styles.container_header}>
          <Text style={styles.container_welcome_title}>
            Bienvenido de vuelta!
          </Text>
          <Text style={styles.container_welcome_subtitle}>Ruben Rodriguez</Text>
          <View style={styles.container_pointsCard}>
            <Text style={styles.container_pointsCard_title}>Tus puntos</Text>
            <View style={styles.container_pointsCard_contain}>
              <Text style={styles.container_pointsCard_contain_moth}>
                {MothCurrent()}
              </Text>
              <Text style={styles.container_pointsCard_contain_value}>
                {formatPoint(totalPoints)} pts
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.container_body}>
          <Text style={styles.container_pointsCard_title_movement}>
            TUS MOVIMIENTOS
          </Text>
          <ScrollView style={styles.container_body_scroll}>
            <ProductList products={data} />
          </ScrollView>
        </View>
        <View style={styles.container_footer}>
          {typePoint === pointsType.all ? (
            <View style={styles.container_footer_btns}>
              <Button
                text="Ganados"
                customStyle={{button: styles.container_footer_btn}}
                hadleOnPress={() => setTypePoint(pointsType.accumulate)}
              />
              <Button
                text="Canjeados"
                customStyle={{button: styles.container_footer_btn}}
                hadleOnPress={() => setTypePoint(pointsType.redeem)}
              />
            </View>
          ) : (
            <Button
              text="Todos"
              hadleOnPress={() => setTypePoint(pointsType.all)}
            />
          )}
        </View>
      </View>
    </PageTemplate>
  );
};
