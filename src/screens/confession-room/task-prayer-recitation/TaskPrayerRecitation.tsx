import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { observer } from 'mobx-react';

import Routes from '../../../navigation/Routes';
import { StackNavigationProp } from '@react-navigation/stack';
import { ConfessionRoomNavigationProps } from '../../../navigation/navigationProps';

import store from '../../../store/index';

import { useLanguageBasedStructure as language } from '../../../hooks/index';
import { responsiveWidth } from '../../../common/utils';
import { SCREEN_HEIGHT, WINDOW_WIDTH } from '../../../helpers/dimensions';

import CustomButton from '../../../components/CustomButton';
import CustomText from '../../../components/CustomText';
import Divider from '../../../components/Divider';
import ExecutionElement from '../widgets/ExecutionElement';
import RedemptionTaskHeader from '../widgets/RedemptionTaskHeader';
import RedemptionContentElement from '../widgets/RedemptionContentElement';

const TaskPrayerRecitation = () => {
  const navigation =
    useNavigation<StackNavigationProp<ConfessionRoomNavigationProps>>();

  const { params } =
    useRoute<
      RouteProp<
        ConfessionRoomNavigationProps,
        Routes.CONFESSION_ROOM_TASK_PRAYER_RECITATION_CONTEXT
      >
    >();

  const { machineName, task } = params;

  const confessionProgress =
    store.confessionsStore.getConfessionProgress(machineName);

  const taskProgress = confessionProgress?.tasks.find(x => x.key === task.key);

  const isRedemptionButtonEnabled = taskProgress
    ? !taskProgress.isCompleted
    : false;

  const onBeginRedemptionPressed = () => {
    navigation.navigate(Routes.CONFESSION_ROOM_TASK_PRAYER_RECITATION_CONTEXT, {
      task,
      machineName,
    });
  };

  return (
    <ScrollView style={styles.fullContainer}>
      <RedemptionTaskHeader
        isRedemptionButtonEnabled={isRedemptionButtonEnabled}
        isTaskCompleted={taskProgress?.isCompleted || false}
        onBeginRedemptionPressed={onBeginRedemptionPressed}
        title="Prayer Recitation"
      />
      <View style={styles.content}>
        <RedemptionContentElement title="Instructions for the task">
          <CustomText
            fontSize={responsiveWidth(12)}
            lineHeight={responsiveWidth(18)}
            color={'#FFF'}
          >
            {language(task.instructionText)}
          </CustomText>
        </RedemptionContentElement>
        <Divider height={responsiveWidth(8)} />
        <RedemptionContentElement title="Any difficulties?">
          <CustomText
            fontSize={responsiveWidth(12)}
            lineHeight={responsiveWidth(18)}
            color="#FFF"
          >
            Contact the online pastor to resolve problems
          </CustomText>
          <Divider height={responsiveWidth(12)} />
          <CustomButton
            title={'Contact the pastor'}
            onPress={() => {}}
            style={styles.contactThePastorButton}
            btnTextStyle={styles.contactThePastorButtonText}
          />
        </RedemptionContentElement>
        <Divider height={responsiveWidth(8)} />
        <RedemptionContentElement title="Execution time">
          <ExecutionElement title="Overall task" value={task.overallTask} />
        </RedemptionContentElement>
        <Divider height={responsiveWidth(44)} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  fullContainer: {
    width: WINDOW_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: '#191919',
  },
  content: {
    paddingHorizontal: responsiveWidth(20),
  },
  contactThePastorButtonText: { color: '#D9C28D', textTransform: 'uppercase' },
  contactThePastorButton: {
    height: responsiveWidth(44),
    borderRadius: responsiveWidth(12),
    borderWidth: responsiveWidth(1),
    borderColor: '#232323',
    backgroundColor: '#191919',
  },
});

export default observer(TaskPrayerRecitation);
