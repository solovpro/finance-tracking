import React from 'react';
import { Modal, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

interface CalendarModalProps {
   setFieldValue: (date: string, format: string) => void;
   setCalendar: (calendar: boolean) => void;
   calendar: boolean;
}

const CalendarModal: React.FC<CalendarModalProps> = ({ setFieldValue, setCalendar, calendar }) => {
   return (
      <Modal animationType='slide' transparent={true} visible={calendar}>
         <Calendar
            minDate={'2021-05-10'}
            maxDate={'2024-05-30'}
            onDayPress={day => {
               setFieldValue('date', moment(day.dateString).format('DD/MM/YYYY'));
               setCalendar(false);
            }}
            style={styles.calendar}
         />
      </Modal>
   );
};

const styles = StyleSheet.create({
   calendar: {
      marginTop: 330,
   },
});

export default CalendarModal;
