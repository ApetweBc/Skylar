import ParallaxScrollView from '@/components/ParallaxScrollView';
import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function Settings () {
    return (
        <>
        <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>
      </ThemedView>
      <ThemedText>This app includes example code to help you get started.</ThemedText>
      
      </>

    );
    }


    const styles = StyleSheet.create({
        titleContainer: {
          flexDirection: 'row',
          gap: 8,
        },
      });
      