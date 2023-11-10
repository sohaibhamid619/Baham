// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Baham !</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header View */}
      <View style={[styles.headerView, styles.goldBackground]}>
        <Text style={styles.headerText}>
          Baham App
        </Text>
      </View>

      {/* Middle View */}
      <ScrollView style={[styles.middleView, styles.beigeBackground]}>
        <Text style={styles.descriptionText}>
          Welcome to the Baham app! Discover the amazing features and benefits that make Baham stand out.
          {'\n\n'}
          <Text style={styles.sloganText}>
            Dive into the world of possibilities with Baham - Connecting People, Connecting Dreams.
          </Text>
          {'\n\n'}
          Explore the app's innovative features and experience the future of connectivity.
        </Text>
        <Text style={styles.descriptionText}>
          Welcome to the Baham app! Discover the amazing features and benefits that make Baham stand out.
          {'\n\n'}
          <Text style={styles.sloganText}>
            Dive into a world of possibilities with Baham - Connecting People, Connecting Dreams.
          </Text>
          {'\n\n'}
          Explore the app's innovative features and experience the future of connectivity.
        </Text>
        <Text style={styles.descriptionText}>
          Welcome to the Baham app! Discover the amazing features and benefits that make Baham stand out.
          {'\n\n'}
          <Text style={styles.sloganText}>
            Dive into a world of possibilities with Baham - Connecting People, Connecting Dreams.
          </Text>
          {'\n\n'}
          Explore the app's innovative features and experience the future of connectivity.
        </Text>
        <Text style={styles.descriptionText}>
          Welcome to the Baham app! Discover the amazing features and benefits that make Baham stand out.
          {'\n\n'}
          <Text style={styles.sloganText}>
            Dive into a world of possibilities with Baham - Connecting People, Connecting Dreams.
          </Text>
          {'\n\n'}
          Explore the app's innovative features and experience the future of connectivity.
        </Text>
      </ScrollView>

      {/* Bottom View */}
      <View style={[styles.footerView, styles.fuchsiaBackground]}>
        {/* <Text style={styles.footerText}>
          © Areeb Aftab (62427) |  (1111)
        </Text> */}
        <Text style={styles.footerText}>
          © Sohaib (61908) | Ayesha (10738) | Muhammad Areeb (64165) |  Areeb Aftab (62427)
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  headerView: {
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleView: {
    height: '75%',
    padding: 20,
  },
  footerView: {
    height: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  goldBackground: {
    backgroundColor: 'gold',
  },
  beigeBackground: {
    backgroundColor: 'beige',
  },
  fuchsiaBackground: {
    backgroundColor: 'fuchsia',
  },
  headerText: {
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight:'bold',
    marginTop:20,
  },
  descriptionText: {
    fontSize: 16,
  },
  sloganText: {
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 12,
    fontStyle: 'italic',
  },
});