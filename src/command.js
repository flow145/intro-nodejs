import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

yargs(hideBin(process.argv))
  .command(
    'new <note>',
    'Create a new note',
    (yargs) =>
      yargs.positional('note', {
        type: 'string',
        describe: 'The content of the note to create',
      }),
    (argv) => console.log(argv.note),
  )
  .options('tags', {
    alias: 't',
    type: 'string',
    description: 'tags to add to the note',
  })

  .command(
    'all',
    'get all notes',
    () => {},
    (argv) => {},
  )

  .command(
    'find <filter>',
    'get matching notes',
    (yargs) => {
      return yargs.positional('filter', {
        describe: 'The search term to filter notes by, will be applied to note.content',
        type: 'string',
      })
    },
    (argv) => {},
  )

  .command(
    'remove <id>',
    'remove a note by id',
    (yargs) => {
      return yargs.positional('id', {
        type: 'number',
        description: 'The id of the note you want to remove',
      })
    },
    (argv) => {},
  )

  .command(
    'web [port]',
    'launch website to see notes',
    (yargs) => {
      return yargs.positional('port', {
        describe: 'port to bind on',
        default: 5000,
        type: 'number',
      })
    },
    (argv) => {},
  )

  .command(
    'clean',
    'remove all notes',
    () => {},
    (argv) => {},
  )

  .demandCommand(1)
  .parse()
