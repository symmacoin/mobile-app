import React, { useState, useContext } from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import i18n from '../../services/i18n';
import { LanguageContext } from '../../state/LanguageContext';
import { withTheme } from 'react-native-elements';

export default function LanguageScreen({ navigation }) {
  const { t, i18n } = useTranslation();
  const { availableLanguages, setAppLanguage } = useContext(LanguageContext);

  const handleLanguageChange = async (language) => {
    await setAppLanguage(language);
    navigation.navigate('TermsAndConditions');
  };

  return (
    <View style={styles.homePageView}>
      {availableLanguages.map((item, i) => (
        <Button
          title={item.name}
          titleStyle={{ color: '#000000' }}
          type="solid"
          raised
          containerStyle={styles.button}
          buttonStyle={{ backgroundColor: '#FFFFFF' }}
          key={i}
          onPress={() => handleLanguageChange(item.lang)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  homePageView: {
    backgroundColor: '#CADEEE',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '90%',
    height: 84,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    margin: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
