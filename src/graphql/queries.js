/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      name
      posts {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      content
      blogID
      blog {
        id
        name
        createdAt
        updatedAt
      }
      comments {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        blogID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      postID
      post {
        id
        title
        content
        blogID
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
      id
      name
      age
      address
      avatar
      createdAt
      updatedAt
    }
  }
`;
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        age
        address
        avatar
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTireKart = /* GraphQL */ `
  query GetTireKart($id: ID!) {
    getTireKart(id: $id) {
      id
      controlNumber
      contractorName
      location
      vehicleType
      number
      wareHouse
      contractPeriod
      contractType
      searchDate
      status
      tireType
      wheel
      runFlood
      recommended
      usedTime
      checkProductResult {
        recombinationIO
        alignment
        check
        punctureIns
        replacementOrRepair
        judgement
      }
      tire1 {
        name
        tireNumber
        image
        tireInfomation
        makerVersion
        comment
      }
      tire2 {
        name
        tireNumber
        image
        tireInfomation
        makerVersion
        comment
      }
      tire3 {
        name
        tireNumber
        image
        tireInfomation
        makerVersion
        comment
      }
      tire4 {
        name
        tireNumber
        image
        tireInfomation
        makerVersion
        comment
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTireKarts = /* GraphQL */ `
  query ListTireKarts(
    $filter: ModelTireKartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTireKarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        controlNumber
        contractorName
        location
        vehicleType
        number
        wareHouse
        contractPeriod
        contractType
        searchDate
        status
        tireType
        wheel
        runFlood
        recommended
        usedTime
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
