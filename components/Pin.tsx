import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";

type Props = {
	pin: {
		title: string;
		image: string;
	};
};

const Pin = ({ pin: { title, image } }: Props) => {
	const [ratio, setRatio] = useState(1);

	const onLike = () => {};

	useEffect(() => {
		Image.getSize(image, (width, height) => setRatio(width / height));
	}, [image]);

	return (
		<View style={styles.pin}>
			<View>
				<Image
					source={{
						uri: image,
					}}
					style={[
						styles.image,
						{
							aspectRatio: ratio,
						},
					]}
				/>
				<Pressable onPress={onLike} style={styles.heartBtn}>
					<AntDesign name="hearto" size={16} color="black" />
				</Pressable>
			</View>

			<Text style={styles.title}>{title}</Text>
		</View>
	);
};

export default Pin;

const styles = StyleSheet.create({
	pin: {
		width: "100%",
		padding: 5,
	},

	image: {
		width: "100%",
		borderRadius: 25,
	},

	title: {
		fontSize: 20,
		fontWeight: "bold",
		margin: 10,
	},

	heartBtn: {
		backgroundColor: "#d3cfd4",
		position: "absolute",
		bottom: 10,
		right: 10,
		padding: 5,
		borderRadius: 50,
	},
});
