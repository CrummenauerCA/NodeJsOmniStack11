import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  incident: {
    marginTop: 20,
    padding: 24,
    paddingBottom: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 18
  },

  incidentProperty: {
    fontSize: 14,
    color: '#41414d'
  },

  incidentValue: {
    fontSize: 15,
    marginBottom: 10,
    color: '#737380'
  },

  contactBox: {
    padding: 24,
    paddingBottom: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 18
  },
  
  heroTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#13131a'
  },

  heroDescription: {
    fontSize: 15,
    color: '#737380',
    marginTop: 8
  },

  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  action: {
    backgroundColor: '#e02041',
    borderRadius: 8,
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  actionText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'
  }
})