import { View, Text, Image, StyleSheet } from "react-native-web"

import theme from "../theme";

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
  },
  flexContainerRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
  },
  flexItemA: {
    flexGrow: 0,
    backgroundColor: 'green',
  },
  flexItemB: {
    flexGrow: 1,
    backgroundColor: 'blue',
  },
  tinyLogo: {
    width: 45,
    height: 45,
  },
  language: {
    backgroundColor: theme.colors.primary,
    flexGrow: 0,
    width: 'min-content',
    color: 'white',
    padding: 4,
    borderRadius: 3,
    marginTop: 5,
    marginBottom: 5,
  }
});

const RepositoryItem = ({item}) => {
  return (
    <>
      <View style={[styles.flexContainer, {gap: 10, backgroundColor: 'white', padding: 15}]}>

        <View style={[styles.flexContainerRow, {gap: 20}]}>
          <View>
            <Image 
              style={[styles.tinyLogo, {borderRadius: 3}]}
              source={{uri: item.ownerAvatarUrl}}
            />
          </View>
          <View style={[styles.flexContainer, {gap: 5}]}>
          <Text style={[{fontWeight: 'bold'}]}>
            {item.fullName}
            </Text>
            <Text style={[{width: 270, color: '#454545'}]}>
            {item.description}
            </Text>
            <Text style={styles.language}>
              {item.language}
            </Text>
          </View>
        </View>

        <View
          style={[styles.flexContainerRow, {gap: 45, marginLeft: 25}]}
        >
          <View
            style={[styles.flexContainer, {alignItems: 'center'}]}
          >
      <Text style={[{fontWeight: 'bold'}]}>
            {formatNumbers(item.stargazersCount)}
            </Text>
            <Text style={[{color: '#454545'}]}>
            Stars
            </Text>
          </View>
          <View
          style={[styles.flexContainer, {alignItems: 'center'}]}
          >
      <Text style={[{fontWeight: 'bold'}]}>
      {formatNumbers(item.forksCount)}
            </Text>
            <Text style={[{color: '#454545'}]}>
            Forks
            </Text>
          </View>
          <View
          style={[styles.flexContainer, {alignItems: 'center'}]}
          >
            <Text style={[{fontWeight: 'bold'}]}>
            {formatNumbers(item.reviewCount)}
            </Text>
            <Text style={[{color: '#454545'}]}>
            Reviews
            </Text>
          </View>
          <View
          style={[styles.flexContainer, {alignItems: 'center'}]}
          >
       <Text style={[{fontWeight: 'bold'}]}>
       {formatNumbers(item.ratingAverage)}
            </Text>
            <Text style={[{color: '#454545'}]}>
            Rating
            </Text>
          </View>
        </View>
      </View>
    </>
  )
}

const formatNumbers = (number) => {
  if (number > 1000) {
    
    return `${((number / 1000).toFixed(1).replace('.0', ''))}k`
  }

  return number
}

export default RepositoryItem