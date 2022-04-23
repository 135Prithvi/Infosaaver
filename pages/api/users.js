import dbConnect from '../../lib/dbConnect'
import User from '../../models/User'

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const users = await User.find({})
        console.log(users); 
        res.status(200).json({ success: true, data: users })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const user = await User.create(req.body)
        res.status(201).json({ success: true, data: user })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

      case 'DELETE' /* Delete a model by its ID */:
        try {
          const deletedPet = await User.deleteOne({ _id: id })
          if (!deletedPet) {
            return res.status(400).json({ success: false })
          }
          res.status(200).json({ success: true, data: {} })
        } catch (error) {
          res.status(400).json({ success: false })
        }
        break
        case "PUT" /* Edit a model by its ID */:
          try {
            const pet = await User.findByIdAndUpdate(id, req.body, {
              new: true,
              runValidators: true,
            });
            if (!pet) {
              return res.status(400).json({ success: false });
            }
            res.status(200).json({ success: true, data: pet });
          } catch (error) {
            res.status(400).json({ success: false });
          }
          break;

    default:
      res.status(400).json({ success: false })
      break
  }
}
