import Comments from "../models/comments.js";

export const getAllComments = (req, res) => {
  Comments.find()
    .then((r) => res.json(r))
    .catch((err) => res.status(500).json({ message: "Error: " + err }));
};

export const postComment = (req, res) => {
  const comment = new Comments({
    comment: req.body.comment,
  });
  comment
    .save()
    .then(() =>
      res.status(200).json({ message: "Comment posted successfully" })
    )
    .catch((err) => res.status(500).json({ message: "Error: " + err }));
};
