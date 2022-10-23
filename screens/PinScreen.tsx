import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { pins } from "../assets/data/pins";
import {
	SafeAreaView,
	useSafeAreaInsets,
} from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../types";

type Props = {};

const PinScreen = (props: Props) => {
	const [ratio, setRatio] = useState(1);
	const navigation = useNavigation();

	const pin = pins[1];
	const insets = useSafeAreaInsets();
	const route = useRoute<RouteProp<RootStackParamList, "Pin">>();
	const pinId = route?.params?.id || "";

	useEffect(() => {
		if (pin.image) {
			Image.getSize(pin.image, (width, height) => setRatio(width / height));
		}
	}, [pin.image]);
	return (
		<SafeAreaView
			style={{
				backgroundColor: "black",
			}}>
			<StatusBar style="light" />
			<View style={styles.root}>
				<Image
					style={[
						styles.image,
						{
							aspectRatio: ratio,
						},
					]}
					source={{
						uri: pin.image,
					}}
				/>
				<Text style={styles.title}>{pin.title}</Text>
			</View>

			<Pressable
				onPress={() => navigation.goBack()}
				style={[
					styles.backBtn,
					{
						top: insets.top + 20,
					},
				]}>
				<Ionicons name="chevron-back" size={35} color="white" />
			</Pressable>
		</SafeAreaView>
	);
};

export default PinScreen;

const styles = StyleSheet.create({
	root: {
		height: "100%",
		backgroundColor: "white",
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50,
	},

	image: {
		width: "100%",
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50,
	},

	title: {
		margin: 10,
		fontSize: 24,
		fontWeight: "600",
		textAlign: "center",
		lineHeight: 35,
	},

	backBtn: {
		position: "absolute",
		left: 20,
	},
});
