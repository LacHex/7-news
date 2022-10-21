import type { NextApiHandler } from 'next'
import path from 'path'
import { promises as fs } from 'fs'

/**
 * This is called to get the static data file. To test this, run the app and
 * navigate to http://localhost:3000/api/staticdata.
 *
 * @param req The request object.
 * @param res The response object.
 */
const handler: NextApiHandler = async (req, res) => {
  // Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'content')

  // Read the json data file articles.json
  const fileContents = await fs.readFile(
    jsonDirectory + '/articles.json',
    'utf8'
  )

  // Return the content of the data file in json format
  res.status(200).json(fileContents)
}

export default handler
