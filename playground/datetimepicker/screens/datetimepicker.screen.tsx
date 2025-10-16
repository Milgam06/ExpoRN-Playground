import DateTimePicker from '@react-native-community/datetimepicker';
import { memo, useState } from 'react';
import { Text, View } from 'react-native';

export const DateTimePickerScreen = memo(() => {
  const [dateTime, setDateTime] = useState<Date>(new Date());

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <DateTimePicker
        value={dateTime}
        mode="date"
        display="spinner"
        textColor="#000"
        onChange={(event, date) => {
          if (date) {
            setDateTime(date);
          }
        }}
      />
      <Text
        style={{
          fontSize: 20,
          color: '#000',
        }}>
        {dateTime.toString()}
      </Text>
    </View>
  );
});
