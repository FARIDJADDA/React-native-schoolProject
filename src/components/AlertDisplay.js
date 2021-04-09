import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image, Button, Share } from "react-native";

const AlertDisplay = ({test, itemGame, close}) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:itemGame.fields.image.stringValue,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

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
        <Text style={styles.titleStyle}>{itemGame.fields.description.stringValue}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => close()}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
            <Pressable
              style={[styles.buttonShare, styles.buttonCloseShare]}
              onPress={onShare}
            >
              <Text style={styles.textStyle}>Partager</Text>
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
  buttonShare: {
    borderRadius: 30,
    padding: 20,
    elevation: 2,
    marginTop:10
  },
  buttonCloseShare: {
    backgroundColor: "#525252",
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
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
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
