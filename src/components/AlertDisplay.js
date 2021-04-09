import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image } from "react-native";

const AlertDisplay = ({test, itemGame, close}) => {
  return (
    <View>
    <Modal
        animationType="slide"
        transparent={true}
        visible={test}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Image style={styles.imageGame} source={{uri:itemGame.fields.image.stringValue}}/>
        <Text style={styles.titleStyle}>{itemGame.fields.name.stringValue}</Text>
        <Text style={styles.textDescription}>{itemGame.fields.description.stringValue}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => close()}
            >
              <Text style={styles.textStyle}>Fermer</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 30,
    padding: 20,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#525252",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  textDescription: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  imageGame:{
      height: 100,
      width: 100,
      marginLeft: 20,
      marginRight: 20
    },
    titleStyle:{
      fontSize: 25,
      color: "black",
      marginTop: 10,
      marginBottom: 10
    },
});

export default AlertDisplay
