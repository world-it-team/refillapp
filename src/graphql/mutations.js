/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
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
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
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
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
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
export const createTireKart = /* GraphQL */ `
  mutation CreateTireKart(
    $input: CreateTireKartInput!
    $condition: ModelTireKartConditionInput
  ) {
    createTireKart(input: $input, condition: $condition) {
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
      tire {
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
export const updateTireKart = /* GraphQL */ `
  mutation UpdateTireKart(
    $input: UpdateTireKartInput!
    $condition: ModelTireKartConditionInput
  ) {
    updateTireKart(input: $input, condition: $condition) {
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
      tire {
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
export const deleteTireKart = /* GraphQL */ `
  mutation DeleteTireKart(
    $input: DeleteTireKartInput!
    $condition: ModelTireKartConditionInput
  ) {
    deleteTireKart(input: $input, condition: $condition) {
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
      tire {
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
