import Test from '~/components/Test.vue'

export default {
  title: 'Components/Test',
  includeStories: ['testComponent'],
}

export const testComponent = ({ title }) => ({ // eslint-disable-line
  components: { Test },

  props: {
    title: {
      type: String,
      default: 'test',
    },
  },

  template: `
    <div>
      <Test :title="title" />
    </div>
  `,
})

testComponent.argTypes = {
  title: {
    type: {
      summary: 'data',
    },
    control: 'text',
  },
}
