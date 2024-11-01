import * as React from 'react';

import { StyleSheet, TouchableOpacity } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

interface ButtonProps {
    style?: object;
    lightColor?: string;
    darkColor?: string;
    [key: string]: any;
}

export default function Button({ style, lightColor, darkColor, ...otherProps }: ButtonProps) {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
    return <TouchableOpacity style={[styles.button, { backgroundColor }, style]} {...otherProps} />;
    }   


    
    const styles = StyleSheet.create({
        button: {
          borderRadius: 8,
          padding: 16,
        },
      });


    