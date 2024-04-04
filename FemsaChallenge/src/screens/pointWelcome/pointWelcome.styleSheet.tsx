import {StyleSheet} from 'react-native';
import {BOX_SHADOW, typography} from '../../theme/default';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  container_header: {
    minHeight: 130,
    flexDirection: 'column',
  },
  container_body: {
    flexDirection: 'column',
    flexGrow: 3,
  },
  container_body_scroll: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    overflow: 'hidden',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  container_footer: {
    marginTop: 20,
    marginBottom: 20,
  },
  container_welcome_title: {
    fontFamily: typography.fontFamily.avenir,
    fontWeight: typography.fontWeights.extrabold,
    fontSize: typography.fontSizes.xl,
    lineHeight: 27,
    color: typography.color.grayblack,
  },
  container_welcome_subtitle: {
    fontFamily: typography.fontFamily.avenir,
    fontWeight: typography.fontWeights.normal,
    fontSize: typography.fontSizes.lg,
    lineHeight: 21,
    color: typography.color.grayblack,
  },
  container_pointsCard: {
    marginTop: 16,
  },
  container_pointsCard_title: {
    fontFamily: typography.fontFamily.avenir,
    fontWeight: typography.fontWeights.extrabold,
    fontSize: typography.fontSizes.sm,
    lineHeight: 19,
    textTransform: 'uppercase',
    color: typography.color.gray,
  },
  container_pointsCard_contain: {
    ...BOX_SHADOW,
    backgroundColor: '#334FFA',
    borderRadius: 20,
    overflow: 'hidden',
    marginHorizontal: 30,
    marginTop: 20,
    padding: 20,
    paddingBottom: 30,
  },
  container_pointsCard_contain_moth: {
    color: '#FFFFFF',
    fontWeight: typography.fontWeights.extrabold,
    fontSize: typography.fontSizes.lg,
    fontFamily: typography.fontFamily.avenir,
    lineHeight: 22,
  },
  container_pointsCard_contain_value: {
    fontFamily: typography.fontFamily.avenir,
    color: '#FFFFFF',
    fontWeight: typography.fontWeights.extrabold,
    fontSize: typography.fontSizes['3xl'],
    lineHeight: 43,
    textAlign: 'center',
    marginTop: 7,
  },
  container_pointsCard_title_movement: {
    fontFamily: typography.fontFamily.avenir,
    fontWeight: typography.fontWeights.extrabold,
    fontSize: typography.fontSizes.sm,
    lineHeight: 19,
    textTransform: 'uppercase',
    color: typography.color.gray,
    marginVertical: 20,
  },

  container_footer_btns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container_footer_btn: {
    width: '48%',
  },
});
