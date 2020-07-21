/* eslint-disable react/jsx-indent */
// @flow
import React from 'react';
import { IconButton } from '@material-ui/core';
import { Web } from 'mdi-material-ui';

type ProjectData = {
  title: string,
  description: string,
  date: string,
  headerImg: *,
  contentImg: *,
  actions: *,
  stacks: string[]
}
const projects: ProjectData[] = [
  {
    title: 'Memorang Web',
    date: 'Nov 2019 - Present',
    description:
      'Memorang helps you learn faster with intelligent flashcards, quizzes, and games that adapt to what you know and how you study.',
    headerImg: '/memorang_header.svg',
    contentImg: '/memorang_content.svg',
    actions:
    <IconButton href="https://www.memorangapp.com/">
      <Web />
    </IconButton>,
    stacks: ['next-js', 'react', 'material-ui', 'flow', 'redux', 'relay', 'appsync', 'react-relay-offline'],
  },
];
export type {
  ProjectData,
};
export {
  projects,
};
