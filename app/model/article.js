'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ArticleSchema = new Schema({
    articleTitle: {
      type: String,
      required: true,
    },
    articleContent: {
      type: String,
    },
    articleColumn: {
      type: String,
    },
    articleImg: {
      type: String,
    },
    imageInfo: {
      type: Object,
    },
    articleCategory: {
      type: String,
      // required: true,
    },
    date: {
      type: Date,
    },
    updateTime: {
      type: Date,
    },
  });
  return mongoose.model('Article', ArticleSchema);
};
