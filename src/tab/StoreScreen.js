import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react'
import { StyleSheet, Text, Button, View,
         TouchableOpacity,Alert, SectionList,
         Image, FlatList} from 'react-native';
import {CustomHeader} from '../index'

const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Button
      onPress={() => Alert.alert('Thank you for buying! \n$copens deducted!')}
      title=" Click to Buy "
      color="#828BC3"
      accessibilityLabel="Learn more about this purple button"
      />
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );
};

export class StoreScreen extends Component {
  render(){
    return (
      <View style={{flex: 1}}>
      <CustomHeader title="Store" isHome={true} navigation={this.props.navigation}/>
      <View style={styles.container}>
      <StatusBar hidden />
      <View style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.categories}>{section.title}</Text>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <ListItem item={item} />;
          }}
        />
      </View>
    </View>
      </View>
    );
  }
}

const SECTIONS = [
  {
    title: 'Top Wear',
    horizontal: true,

    data: [
      {
        key: '1',
        text: 'Unicorn T-shirt \n69 $copens',
        uri: 'https://cf.shopee.ph/file/d43163395a3a1d288c69e4aa095d29a1',
      },
      {
        key: '2',
        text: 'Lamp T-shirt \n30 $copens',
        uri: 'https://www.how-to-draw-cartoons-online.com/image-files/cartoon-t-shirts-7.gif',
      },

      {
        key: '3',
        text: 'Cool Teddy Bear T-shirt \n89 $copens',
        uri: 'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T1355A788MPA2756PT17X58Y28D1012243820FS2800/views/1,width=378,height=378,appearanceId=788,backgroundColor=F2F2F2/teddy-bear-is-out-of-money-unisex-heather-prism-t-shirt.jpg',
      },
      {
        key: '4',
        text: 'Cartoon T-shirt \n20 $copens',
        uri: 'https://m.media-amazon.com/images/I/71rryWaDfYL._AC_UL320_.jpg',
      },
    ],
  },
  {
    title: 'Bottom Wear',
    horizontal: true,

    data: [
      {
        key: '1',
        text: 'British Khaki Pants \n20 $copens',
        uri: 'https://library.kissclipart.com/20181004/bgq/kissclipart-trousers-clipart-sweatpants-clothing-685dd73fbb91e486.png',
      },
      {
        key: '2',
        text: 'Blue Shorts \n10 $copens',
        uri: 'https://ae01.alicdn.com/kf/H56314d55292a4adb9302ed2a7d58e006x/Digital-Printing-Men-s-Quick-Dry-Beach-Shorts-Cartoon-Cartoon-Printing-Side-Pocket-Casual-Shorts.jpg_Q90.jpg_.webp',
      },

      {
        key: '3',
        text: 'Jeans \n49 $copens',
        uri: 'https://i.pinimg.com/originals/eb/47/a3/eb47a30f2a600865adfbd6e76cf08ee8.jpg',
      },
      {
        key: '4',
        text: 'Uchicha Jogging Pants \n100 $copens',
        uri: 'https://i.ebayimg.com/images/g/67QAAOSwOyxcuE0M/s-l1600.jpg',
      }
    ],
  },
  {
    title: 'Shoes',
    horizontal: true,

    data: [
      {
        key: '1',
        text: 'Blue Shoes \n29 $copens',
        uri: 'http://clipart-library.com/img/750079.png',
      },
      {
        key: '2',
        text: 'Red Shoes \n29 $copens',
        uri: 'https://media.istockphoto.com/vectors/red-sneakers-vector-illustration-realistic-gym-shoes-color-vector-vector-id1221345724?k=20&m=1221345724&s=612x612&w=0&h=JG2O8qTn1QdXKagJ8JrD8VDf9REjrinmIweaGcO0TcE=',
      },

      {
        key: '3',
        text: 'Orange Shoes \n29 $copens',
        uri: 'https://i.pinimg.com/originals/2d/81/69/2d8169059eaa219df13b70de2b33676a.jpg',
      },
      {
        key: '4',
        text: 'Green Shoes \n29 $copens',
        uri: 'https://www.kindpng.com/picc/m/39-391202_shoes-cartoon-png-transparent-png.png',
      }
    ],
  },
  {
    title: 'Accessories',
    horizontal: true,

    data: [
      {
        key: '1',
        text: 'Baseball Cap \n10 $copens',
        uri: 'https://i.pinimg.com/originals/1a/f0/49/1af049c5a09863dfca60b628495eb56a.jpg',
      },
      {
        key: '2',
        text: 'Scarf \n70 $copens',
        uri: 'https://www.clipartkey.com/mpngs/m/13-137812_striped-scarf-png.png',
      },

      {
        key: '3',
        text: 'Watch \n50 $copens',
        uri: 'https://st.depositphotos.com/1742172/3817/v/950/depositphotos_38177111-stock-illustration-cartoon-wrist-watch.jpg',
      },
      {
        key: '4',
        text: '$copens Gauntlet \n1000 $copens',
        uri: 'https://i.pinimg.com/736x/90/c9/9d/90c99dc3837828d9f2053d3e6757c8f9.jpg',
      },
    ],
  }
];


const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    flex: 1,
    backgroundColor: '#303C4A',
    alignItems:'center',
  },
  categories: {
    fontWeight: '800',
    fontSize: 25,
    color: 'tomato',
    marginTop: 20,
    marginBottom: 5,
    textAlign:'center',
    fontStyle:'italic',
    fontWeight:'bold',
    letterSpacing:5,
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 200,
    height: 200,
  },
  itemText: {
    color: '#BDDCE8',
    marginTop: 5,
    textAlign:'center',
    fontSize:20
  },
});
