import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

type Props = {
	title: string;
	image: string;
};

const Pin = ({ title, image }: Props) => {
	return (
		<View style={styles.pin}>
			<Image
				source={{
					uri: image,
				}}
				style={styles.image}
			/>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
};

export default Pin;

const styles = StyleSheet.create({
	pin: {
		width: "100%",
	},

	image: {
		width: "100%",
		height: 200,
		borderRadius: 25,
	},

	title: {
		fontSize: 20,
		fontWeight: "bold",
		margin: 10,
	},
});
