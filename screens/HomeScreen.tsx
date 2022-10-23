import { Image, ScrollView, StyleSheet } from "react-native";
import Pin from "../components/Pin";
import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { pins } from "../assets/data/pins";

export default function HomeScreen({
	navigation,
}: RootTabScreenProps<"TabOne">) {
	return (
		<ScrollView>
			<View style={styles.container}>
				<View style={styles.column}>
					{pins
						.filter((item, index) => index % 2 === 0)
						.map((pin) => (
							<Pin key={pin.id} pin={pin} />
						))}
				</View>
				<View style={styles.column}>
					{pins
						.filter((item, index) => index % 2 === 1)
						.map((pin) => (
							<Pin key={pin.id} pin={pin} />
						))}
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 10,
	},

	column: {
		flex: 1,
	},
});
