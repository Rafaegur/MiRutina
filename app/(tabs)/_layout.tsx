import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons'; // Aseg�rate de importar Ionicons
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
              options={{
                  title: 'Rutinas',
                  tabBarIcon: ({ color, focused }) => (
                      <Ionicons name={focused ? 'barbell' : 'barbell-outline'} size={24} color={color} />
                  ),
              }}
      />
    </Tabs>
  );
}
