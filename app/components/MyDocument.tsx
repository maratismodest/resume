'use client'
import React from 'react';
import {Page, Text, View, Document, StyleSheet, Image} from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 16,
  },
  section: {
    margin: 10,
    padding: 10,
  },
});

const tags: { name: string, color: string }[] = [
  {
    name: 'React',
    color: 'red'
  },
  {
    name: 'Typescript',
    color: 'blue'
  },
  {
    name: 'Next.js',
    color: 'purple'
  },
  {
    name: 'Nest.js',
    color: 'violet'
  },
  {
    name: 'Redux',
    color: 'yellow'
  },
  {
    name: 'Tailwind',
    color: 'orange'
  },
]

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={{...styles.section, flexDirection: 'row', gap: 16, alignItems: 'center'}}>
        <Image src='/photo.jpeg' style={{width: 90, height: 90, borderRadius: 90}}/>
        <View>
          <Text>Marat Faizerakhmanov</Text>
          <Text style={{fontSize: 14}}>Frontend Developer</Text>
        </View>
      </View>
      <View style={{flexDirection: "row", gap: 16, flexWrap: 'wrap'}}>
        {tags.map(({name, color}) =>
          <Text key={name} style={{
            border: '1px solid black',
            paddingTop: 4,
            paddingBottom: 4,
            paddingLeft: 8,
            paddingRight: 8,
            color: 'white',
            backgroundColor: color,
            borderRadius: 16,
          }}>{name}</Text>)}
      </View>
    </Page>
  </Document>
);

export default MyDocument
