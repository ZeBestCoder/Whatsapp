import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { IMessage } from 'react-native-gifted-chat';
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated';



type ReplyMessageBarProps = {
  clearReply: () => void;
  message: IMessage | null;
};

const ReplyMessageBar = ({ clearReply, message }: ReplyMessageBarProps) => {
  return (
    <>
    { message && (
        <Animated.View 
        entering={FadeInDown}
        exiting={FadeOutDown}
        
        style={{ height: 50, flexDirection: 'row', backgroundColor: '#E4E9EB'}}>
            <View style={{ height: 50, width: 6, backgroundColor: '#89BC0C'}}></View>
            <View>
                <Text
                 style={{
                    color: '#89BC0C',
                    paddingLeft: 10,
                    paddingTop: 5, 
                    fontWeight: '600',
                    fontSize: 15,
                 }}
                >{message?.user.name}</Text>
                <Text style={{ color: Colors.gray, paddingLeft: 10, paddingTop: 5}} >
                    {message!.text.length > 40 ? message?.text.substring(0, 40) + '...' : message?.text}
                </Text>
            </View>
            <View style={{
                flex: 1,
                alignItems: 'flex-end',
                justifyContent: 'center',
                paddingRight: 10,
            }}>
                <TouchableOpacity onPress={clearReply}>
                    <Ionicons name='close-circle-outline' size={28} color={Colors.primary}/>
                </TouchableOpacity>
            </View>
        </Animated.View>
    )}
    </>
    
  );
};

export default ReplyMessageBar;
