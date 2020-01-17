import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Animated,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
  ImageBackground,
  Image,
  Platform,
  StatusBar,
  Dimensions
} from "react-native";
import StarRating from "react-native-star-rating";
import { Ionicons } from "@expo/vector-icons";
import Tag from "../Tag/tag";
import TAG_START from "../Tag/Dates/date";
import AdultCount from "../Tag/Guest/adultCount";
import Adult from "../Tag/Guest/adult";
import Start from "../Tag/Dates/date";
import Date from "../Tag/Dates/date";
import { connect, Provider } from "react-redux";
import { createStore } from "redux";

//import DateTimePicker from "react-native-modal-datetime-picker";
//const { height, width } = Dimensions.get("window");
let date_pick;

const initialState = {
  value: 0
};
const reducer = (state = initialState) => {
  return state;
};
const store = createStore(reducer);
//const TAGSTART = tagStart;
export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  // showDateTimePicker = () => {
  //   date_pick = new Date(this.state.reminder.date);
  //   this.setState({ isDateTimePickerVisible: true });
  // };

  // hideDateTimePicker = () => {
  //   this.setState({ isDateTimePickerVisible: false });
  // };

  // handleDatePicked = date => {
  //   console.log("A date has been picked: ", date);
  //   this.hideDateTimePicker();
  // };

  // returnData(selectedStartDate, selectedEndDate) {
  //   alert("Works!");
  //   this.setState({ startDate: selectedStartDate, endDate: selectedEndDate });
  // }

  returnGuest(value) {
    alert("Works!");
    this.setState({ value: value });
  }

  UNSAFE_componentWillMount() {
    this.scrollY = new Animated.Value(0);

    this.startHeaderHeight = 60;
    this.endHeaderHeight = 40;
    if (Platform.OS == "android") {
      this.startHeaderHeight = 80 + StatusBar.currentHeight;
      this.endHeaderHeight = 60 + StatusBar.currentHeight;
    }
    this.animatedHeaderHeight = this.scrollY.interpolate({
      inputRange: [0, 40],
      outputRange: [this.startHeaderHeight, this.endHeaderHeight],
      extrapolate: "clamp"
    });
    this.animatedOpacity = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [0, 10],
      extrapolate: "clamp"
    });
    this.animatedTagTop = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [-30, 0],
      extrapolate: "clamp"
    });
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, marginTop: 50 }}>
        <View style={{ flex: 1 }}>
          <Animated.View
            style={{
              height: this.animatedHeaderHeight,
              backgroundColor: "white"
            }}
          >
            <View style={styles.searchContainer}>
              <Ionicons name="md-search" color="grey" size={25} />
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Try with any Events"
                placeholderTextColor="#808080"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
            <Animated.View
              style={{
                flexDirection: "row",
                marginHorizontal: 20,
                position: "relative",
                top: this.animatedTagTop,
                opacity: this.animatedOpacity
              }}
            >
              {/* <Provider store={store}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Guests")}
                >
                  <Tag name="Guests" />
                  {/* <Text> HI {this.state.value} </Text> */}
              {/* </TouchableOpacity>
              </Provider> */}

              <View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Date")}
                  style={{
                    minHeight: 40,
                    minWidth: 60,
                    padding: 10,
                    backgroundColor: "white",
                    borderColor: "#dddddd",
                    borderWidth: 1,
                    borderRadius: 5,
                    marginRight: 5
                  }}
                >
                  <Text
                    id="changeContent"
                    style={{ fontWeight: "700", fontSize: 14 }}
                  >
                    {" "}
                    Dates
                  </Text>
                </TouchableOpacity>

                {/* <DateTimePicker
                  isVisible={this.state.isDateTimePickerVisible}
                  onConfirm={this.handleDatePicked}
                  onCancel={this.hideDateTimePicker}
                  date={date_pick}
                /> */}
              </View>
            </Animated.View>
          </Animated.View>

          <ScrollView
            style={styles.Container}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { y: this.scrollY } } }
            ])}
          >
            <View>
              <Text style={styles.titleText}> Home </Text>
            </View>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.list}
            >
              <View style={styles.square}>
                {/*react-native-elements Card*/}
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Stay")}
                >
                  <Image
                    style={{
                      width: 150,
                      height: 120,
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20
                    }}
                    source={require("D:/react-native/TestingProject/App/band1.png")}
                  />
                </TouchableOpacity>
                <Text style={styles.listText}> Bands </Text>
              </View>

              <View style={styles.square}>
                {/*react-native-elements Card*/}
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("AsyncStorageExample")
                  }
                >
                  <Image
                    style={{
                      width: 150,
                      height: 120,
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20
                    }}
                    source={require("D:/react-native/TestingProject/App/band2.png")}
                  />
                  <Text style={styles.listText}> Singers </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.square}>
                {/*react-native-elements Card*/}
                <Image
                  style={{
                    width: 150,
                    height: 120,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20
                  }}
                  source={require("D:/react-native/TestingProject/App/band3.png")}
                />
                <Text style={styles.listText}> Adventure </Text>
              </View>
            </ScrollView>
            <View>
              <Text style={styles.titleText}> Introducing Events </Text>
              <Text style={{ margin: 10, fontSize: 16 }}>
                Select your events on your own interest
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "column" }}>
                <Image
                  style={styles.adventureImages}
                  source={require("D:/react-native/TestingProject/App/band1.png")}
                />
                <Text
                  style={{ fontWeight: "700", fontSize: 20, marginLeft: 5 }}
                >
                  Stylish Indians
                </Text>
                <Text style={{ fontSize: 18 }}> Band 1 </Text>
                <View style={{ marginLeft: 6 }}>
                  <StarRating
                    disabled={true}
                    maxStars={5}
                    starSize={16}
                    fullStarColor={"orange"}
                  />
                </View>
              </View>
              <View style={{ flexDirection: "column", marginLeft: 5 }}>
                <Image
                  style={styles.adventureImages}
                  source={require("D:/react-native/TestingProject/App/band5.png")}
                />
                <Text
                  style={{ fontWeight: "700", fontSize: 20, marginLeft: 5 }}
                >
                  Modern Rockers
                </Text>
                <Text style={{ fontSize: 18 }}> Band 2 </Text>
                <View style={{ marginLeft: 6 }}>
                  <StarRating
                    disabled={true}
                    maxStars={5}
                    starSize={16}
                    fullStarColor={"orange"}
                  />
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "column" }}>
                <Image
                  style={styles.adventureImages}
                  source={require("D:/react-native/TestingProject/App/band2.png")}
                />
                <Text
                  style={{ fontWeight: "700", fontSize: 20, marginLeft: 10 }}
                >
                  We are Stars
                </Text>
                <Text style={{ fontSize: 18 }}> Band 3 </Text>
                <View style={{ marginLeft: 6 }}>
                  <StarRating
                    disabled={true}
                    maxStars={5}
                    starSize={16}
                    fullStarColor={"orange"}
                  />
                </View>
              </View>
              <View style={{ flexDirection: "column", marginLeft: 10 }}>
                <Image
                  style={styles.adventureImages}
                  source={require("D:/react-native/TestingProject/App/band6.png")}
                />
                <Text
                  style={{ fontWeight: "700", fontSize: 20, marginLeft: 5 }}
                >
                  Classical Lovers
                </Text>
                <Text style={{ fontSize: 18 }}> Band 4 </Text>
                <View style={{ marginLeft: 6 }}>
                  <StarRating
                    disabled={true}
                    maxStars={5}
                    starSize={16}
                    fullStarColor={"orange"}
                  />
                </View>
              </View>
            </View>
            <Image
              style={styles.adventureImages}
              source={require("D:/react-native/TestingProject/App/band4.png")}
            />
          </ScrollView>
          <View style={{ flexDirection: "row", marginLeft: 15 }}>
            <View style={{ flexDirection: "column", marginLeft: 10 }}>
              <Ionicons name="md-search" color="grey" size={35} />
              <Text style={{ marginLeft: -10 }}> Home </Text>
            </View>
            <View style={{ flexDirection: "column", marginLeft: 40 }}>
              <Ionicons name="md-heart" color="grey" size={35} />
              <Text style={{ marginLeft: -10 }}> Saved </Text>
            </View>
            <View style={{ flexDirection: "column", marginLeft: 40 }}>
              <Ionicons name="md-globe" color="grey" size={35} />
              <Text style={{ marginLeft: -5 }}> Events </Text>
            </View>
            <View style={{ flexDirection: "column", marginLeft: 40 }}>
              <Ionicons name="md-chatboxes" color="grey" size={35} />
              <Text style={{ marginLeft: -5 }}> Inbox </Text>
            </View>
            <View style={{ flexDirection: "column", marginLeft: 40 }}>
              <Ionicons name="md-person" color="grey" size={35} />
              <Text style={{ marginLeft: -10 }}> Profile </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    marginLeft: 16,
    marginRight: 16
  },

  searchContainer: {
    flexDirection: "row",
    borderColor: "#000",
    marginHorizontal: 20,
    padding: 15,
    marginBottom: 20,
    elevation: 3,
    marginTop: Platform.OS == "android " ? 30 : null
  },
  dates: {
    flexDirection: "row"
  },
  input: {
    paddingHorizontal: 20
  },
  titleText: {
    fontSize: 25,
    marginTop: 30,
    fontWeight: "bold",
    paddingTop: 10
  },

  list: {
    flexDirection: "row"
  },
  listText: {
    fontSize: 16,
    marginTop: 5,
    textAlign: "center"
  },

  square: {
    width: 150,
    height: 160,
    borderRadius: 20,
    backgroundColor: "white",
    elevation: 6,
    marginLeft: 5,
    marginHorizontal: 12,
    marginVertical: 12
  },

  datesinput: {
    flexDirection: "row",
    borderColor: "#000",
    padding: 5,
    marginLeft: 5,
    textAlign: "center",
    elevation: 2,
    width: 80,
    fontSize: 14
  },
  adventureImages: {
    marginTop: 10,
    marginLeft: 10,
    width: 160,
    height: 180,
    borderRadius: 10
  }
});
