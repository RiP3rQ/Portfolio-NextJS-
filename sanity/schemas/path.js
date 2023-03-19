import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'path',
  title: 'Path',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      option: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skills'}}],
    }),
    defineField({
      name: 'startingDate',
      title: 'StartingDate',
      type: 'date',
    }),
    defineField({
      name: 'endingDate',
      title: 'endingDate',
      type: 'date',
    }),
  ],
})
