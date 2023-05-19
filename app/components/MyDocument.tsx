'use client'
import React from 'react';
import {Page, Text, View, Document, StyleSheet, Image, Link, Font} from '@react-pdf/renderer';

const tags: string[] = ['React', 'Typescript', 'Next.js', 'Nest.js', 'Redux', 'Tailwind']
const colors: string[] = ['red', 'blue', 'purple', 'violet', 'green', 'orange']
const skills: string[] = [
  "TypeScript, React, Redux, Next.js, Node.js",
  "E2E, unit testing (react-testing-library)",
  "Preprocessors: SCSS/SASS/LESS,TailwindCSS",
  "Cross-browser development",
  "Graphic editors: Figma",
  "Other: Git, BEM",
  "Scrum, Jira, YouTrack",
]

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 16,
    fontSize: 12,
  },
  section: {
    marginBottom: 10,
  },
  h1: {
    fontSize: 16,
    marginBottom: 4
  },
  h2: {
    fontSize: 14,
    marginBottom: 4
  },
  h3: {
    fontSize: 12,
    textDecoration: 'underline',
    marginBottom: 4,
  },
  tag: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    color: 'white',
    borderRadius: 4,
    borderColor: 'black'
  },
  list: {
    flexDirection: 'row',
    gap: 4,
  },
  column: {
    flexDirection: 'column',
    gap: 2,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexGrow: 1,
  },
});

// Create Document Component

interface ResumeProps {
  name: string,
  position: string,
  about: string,
  tags: string[],
  skills: string[],
  experience: {
    company: string,
    position: string,
    duration: string,
    duties: string
  }[],
  contacts: { name: string, link: string }[]
}

export const resume: ResumeProps = {
  name: 'Marat Faizerakhmanov',
  position: 'Frontend Developer',
  about: 'I love to share experience and being a thankful student.',
  tags: tags,
  skills: skills,
  experience: [
    {
      company: 'Sovcombank',
      position: 'Senior Frontend Developer',
      duration: 'September 2022 - Present',
      duties: 'Develop and maintain on Next.JS'
    },
    {
      company: 'Schwarzthal Tech',
      position: 'Frontend Developer',
      duration: 'April 2022 - September 2022',
      duties: 'Develop and maintain on React.JS'
    }
  ],
  contacts: [
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/marat-faizerakhmanov/'
    },
    {
      name: 'Github',
      link: 'https://github.com/maratismodest'
    },
    {
      name: 'Telegram',
      link: 'https://t.me/maratfaizer'
    }
  ]
}

const MyDocument = ({resume}: { resume: ResumeProps }) => {
  const {name, position, about, tags, skills, experience, contacts} = resume
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={[styles.section, {flexDirection: 'row', gap: 16, alignItems: 'center'}]}>
          <Image src='/photo.jpeg' style={{width: 80, height: 80, borderRadius: 80}}/>
          <View>
            <Text style={styles.h1}>{name}</Text>
            <Text>{position}</Text>
            <Text>{about}</Text>
          </View>
        </View>
        <View style={[styles.list, styles.section]}>
          {tags.map((tag, index) =>
            <Text key={tag} style={[styles.tag, {backgroundColor: colors[index]}]}>{tag}</Text>
          )}
        </View>
        <View style={[styles.column, styles.section]}>
          <Text style={styles.h2}>Skills:</Text>
          {skills.map(skill => <Text key={skill}>- {skill}</Text>)}
        </View>
        <View style={[styles.column, styles.section]}>
          <Text style={styles.h2}>Experience:</Text>
          <View>
            {experience.map((x, index) =>
              <View key={index} style={styles.section}>
                <Text style={styles.h3}>Company: {x.company}</Text>
                <Text>Position: {x.position}</Text>
                <Text>Duration: {x.duration}</Text>
                <Text>Duties: {x.duties}</Text>
              </View>
            )}
          </View>
        </View>
        <View style={[styles.column, styles.section, {gap: 0}]}>
          <Text style={styles.h2}>Contacts:</Text>
          <View style={[styles.section, styles.column]}>
            {contacts.map((x, index) =>
              <Text key={index}>{x.name}: <Link src={x.link}>{x.link}</Link></Text>
            )}
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default MyDocument

