import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257E5',
    justifyContent: 'center',
    padding: 40
  },

  content: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#FFF',
    fontFamily: 'Archivo_700Bold',
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
  },
  
  description: {
    color: '#D4C2FF',
    marginTop: 24,
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    lineHeight: 26,
    maxWidth: 240,
  },

  okButton: {
    backgroundColor: '#04D361',
    alignItems: 'center',
    justifyContent: 'center',
    height: 58,
    borderRadius: 8,
    marginVertical: 40,
  },

  okButtonText: {
    color: '#FFF',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
  }

});

export default styles;