import React from 'react';
import { View } from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

const TeacherList = () => {
  return (
    <View style={styles.container}>
      <PageHeader title="Available Proffys"></PageHeader>
    </View>
  );
}

export default TeacherList;