import * as React from 'react';
import  { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import { withFirebaseHOC } from '../config/Firebase'

const persons = [
  {
	id: "1",
	name: "Michelle Obama",
  value:'Michelle LaVaughn Robinson Obama is an American attorney and author who served as the first lady of the United States from 2009 to 2017. She was the first African-American woman to serve in this position. She is the wife of former President Barack Obama.',
  website: 'https://en.wikipedia.org/wiki/Michelle_Obama',
  image: require('../images/Michelle_Obama.jpg')
  },
  {
	id: "2",
	name: "Oprah Winfrey",
  value:'Oprah Gail Winfrey is an American talk show host, television producer, actress, author, and philanthropist. She is best known for her talk show, The Oprah Winfrey Show.',
  website: 'https://en.wikipedia.org/wiki/Oprah_Winfrey',
  image: require('../images/oprah.jpg'),
},
  {
	id: "3",
	name: "Lydia Cacho",
  value:'Lydia María Cacho Ribeiro  is a Mexican journalist, feminist, and human rights activist. Described by Amnesty International as perhaps Mexicos most famous investigative journalist and womens rights advocate, Cachos reporting focuses on violence against and sexual abuse of women and children',
  website: 'https://en.wikipedia.org/wiki/Lydia_Cacho',
  image:  require('../images/lydia.jpg'),
  },
  {
	id: "4",
	name: "Nadine Gasman",
  value:'Nadine Flora Gasman Zylbermann is the president of the National Womens Institute of Mexico,and the representative of UN Women in Brazil',
  website: 'https://en.wikipedia.org/wiki/Nadine_Gasman',
  image: require('../images/nadine.jpg'),

  },
  {
	id: "5",
	name: "Suzanne Kearns",
  value:'Suzanne K. Kearns is a Canadian author, academic, and professor of aviation who works at the University of Waterloo. She is the Founding Director of the Waterloo Institute for Sustainable Aeronautics (WISA) and teaches within the Aviation programs',
  website: 'https://en.wikipedia.org/wiki/Suzanne_K._Kearns',
  image: require('../images/suzanne.jpg')
  },
  {
	id: "6",
	name: "Anita Layton",
  value:'Anita T. Layton is an applied mathematician who applies methods from computational mathematics and partial differential equations to model kidney function. She presently holds a Canada 150 Research Chair in Mathematical Biology and Medicine at the University of Waterloo.',
  website: 'https://en.wikipedia.org/wiki/Anita_Layton',
  image: require('../images/anita.jpg')
  },
  
];

class leadingLadies extends Component {
    render(){
        return(
            <View style={styles.container}>
            <ScrollView>
              <View>
                {persons.map((person) => {
                  return (
                    <View style={styles.item}>
                      <Text style={styles.item2}  > {person.name} 
                      <Image  
                source={person.image}
                style={styles.image}
              />
                      <Text style={styles.item1}>{"\n"}{"\n"}{"\n"}{"\n"}{person.value}</Text>
    
                      </Text>
                      
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      padding: 50,
      flex: 1,
    },
    item: {
      padding: 40,
      fontSize: 25,
      marginTop: 1,
      backgroundColor:'#d8dbe2',
      
    },
    item2: {
      
      fontSize: 25,
      fontWeight: 'bold'
    },
    item1: {
      padding: 180,
      fontSize: 25,
      marginTop: 25,
      position: 'absolute',
      overflow: 'visible',
      fontStyle: 'italic'
    },
    image:{
        position: 'absolute',
                width: 193,
                height: 200,
                overflow: 'hidden'
    }
  });
  
  
  export default withFirebaseHOC(leadingLadies)