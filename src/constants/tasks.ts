import { Task } from "./types";

const tasks: Task[] = [
  {
    id: 'dskaldsa',
    code: 'spoon',
    unlocked: false,
    completed: false,
    type: "vote",
    title: '1. Spoon',
    description: 'Present a spoon in the most magnificent way possible. Most magnificent presentation of a spoon wins.',
    specialTask: {
      name: 'Amy',
      title: '1. Turn This Puddle Into Art',
      description: 'Transform an ordinary puddle into a masterpiece using any materials you can find.',
    }
  },
  {
    id: 'dskalrfdsda',
    code: 'sandwich',
    unlocked: false,
    completed: false,
    type: "textarea",
    title: '2. Sandwich',
    description: 'Describe how to make a delicious sandwich. Most delicious potential sandwich wins.',
    specialTask: {
      name: 'Kelsea',
      title: '2. Make a Painting That Smells Delicious',
      description: 'Create a painting that tantalizes the nose as much as the eyes.',
    }
  },
  {
    id: 'dskldsa',
    code: 'marbles',
    unlocked: false,
    completed: false,
    type: "input",
    title: '3. Marbles',
    description: 'How many marbles do you think you can hold in your hand?',
    specialTask: {
      name: 'Kevin',
      title: '3. Compose a Symphony for a Single Note',
      description: 'Write and perform an epic symphony using only one note as your foundation.',
    }
  },
  {
    id: 'dskal3sadsa',
    code: 'robot',
    unlocked: false,
    completed: false,
    type: "vote",
    title: '4. Robot',
    description: 'Make a robot. Best robot wins.',
    specialTask: {
      name: 'Riley',
      title: '4. Convince a Potato It Can Fly',
      description: 'Use your powers of persuasion to make a potato believe it can soar through the skies.',
    }
  },
  {
    id: 'dskaldas2sda',
    code: 'color',
    unlocked: false,
    completed: false,
    type: "input",
    title: '5. Colour',
    description: 'Favourite colour?',
    specialTask: {
      name: 'Tina',
      title: 'Build a Bridge for Ants',
      description: 'Construct a functional and elegant bridge that ants can use to cross a gap.',
    }
  },
];

export default tasks;
