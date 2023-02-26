import React from 'react';
import { TouchableOpacity, StyleSheet, Text, FlatList } from 'react-native';
import { useStore } from '../stores/Global.store';

interface CategoriesButtonsProps {
   setFieldValue: (date: string, format: string) => void;
   setCategories: (category: boolean) => void;
}

const CategoriesButtons: React.FC<CategoriesButtonsProps> = ({ setFieldValue, setCategories }) => {
   const store = useStore();
   const lastCategory = store.categories[store.categories.length - 1];
   return (
      <FlatList
         data={store.categories}
         renderItem={({ item }) => (
            <TouchableOpacity
               key={item}
               onPress={() => {
                  setCategories(false);
                  setFieldValue('category', item);
               }}
               style={[
                  styles.input,
                  styles.inputCategory__Item,
                  item === lastCategory && styles.inputCategory__ItemLast,
               ]}
            >
               <Text style={[styles.inputText, styles.inputCategory__Text]}>{item}</Text>
            </TouchableOpacity>
         )}
      />
   );
};

const styles = StyleSheet.create({
   inputCategory__Item: {
      marginBottom: 1,
      backgroundColor: '#0371DF',
      borderRadius: 0,
   },
   inputCategory__ItemLast: {
      borderBottomRightRadius: 15,
      borderBottomLeftRadius: 15,
   },
   inputCategory__Text: {
      color: '#FFF',
   },
   input: {
      borderColor: '#AAA',
      borderRadius: 10,
      borderWidth: 1,
      marginLeft: '10%',
      marginBottom: 35,
      fontSize: 20,
      paddingHorizontal: 10,
      width: '80%',
      height: 45,
   },
   inputText: {
      color: '#999',
      paddingVertical: 6,
      fontSize: 20,
   },
});

export default CategoriesButtons;
