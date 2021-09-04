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
export const createTireCheckinfo = /* GraphQL */ `
  mutation CreateTireCheckinfo(
    $input: CreateTireCheckinfoInput!
    $condition: ModelTireCheckinfoConditionInput
  ) {
    createTireCheckinfo(input: $input, condition: $condition) {
      id
      topTable {
        controlNumber
        contractorName
        location
        vehicleType
        number
        wareHouse
        contractPeriod
        contractType
      }
      productInfo {
        searchDate
        status
        tireType
        wheel
        runFlood
        recommended
        usedTime
      }
      tires {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTireCheckinfo = /* GraphQL */ `
  mutation UpdateTireCheckinfo(
    $input: UpdateTireCheckinfoInput!
    $condition: ModelTireCheckinfoConditionInput
  ) {
    updateTireCheckinfo(input: $input, condition: $condition) {
      id
      topTable {
        controlNumber
        contractorName
        location
        vehicleType
        number
        wareHouse
        contractPeriod
        contractType
      }
      productInfo {
        searchDate
        status
        tireType
        wheel
        runFlood
        recommended
        usedTime
      }
      tires {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTireCheckinfo = /* GraphQL */ `
  mutation DeleteTireCheckinfo(
    $input: DeleteTireCheckinfoInput!
    $condition: ModelTireCheckinfoConditionInput
  ) {
    deleteTireCheckinfo(input: $input, condition: $condition) {
      id
      topTable {
        controlNumber
        contractorName
        location
        vehicleType
        number
        wareHouse
        contractPeriod
        contractType
      }
      productInfo {
        searchDate
        status
        tireType
        wheel
        runFlood
        recommended
        usedTime
      }
      tires {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTireProfile = /* GraphQL */ `
  mutation CreateTireProfile(
    $input: CreateTireProfileInput!
    $condition: ModelTireProfileConditionInput
  ) {
    createTireProfile(input: $input, condition: $condition) {
      id
      name
      number
      image
      tireInfomation
      makerVersion
      measurement {
        tireReplaceJdg
        yearManufacJdg
        recombinIO
        punctureInsp
        alignment
        wheelReplace
        checkFillAir
      }
      status {
        remainGroove
        foreignObjectStab
        unevenWear
        wheelRimBend
        crack
        wheelCorrosion
        separation
        nutSearWear
        airFlow
      }
      comment
      checkInfoID
      tireCheckinfo {
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTireProfile = /* GraphQL */ `
  mutation UpdateTireProfile(
    $input: UpdateTireProfileInput!
    $condition: ModelTireProfileConditionInput
  ) {
    updateTireProfile(input: $input, condition: $condition) {
      id
      name
      number
      image
      tireInfomation
      makerVersion
      measurement {
        tireReplaceJdg
        yearManufacJdg
        recombinIO
        punctureInsp
        alignment
        wheelReplace
        checkFillAir
      }
      status {
        remainGroove
        foreignObjectStab
        unevenWear
        wheelRimBend
        crack
        wheelCorrosion
        separation
        nutSearWear
        airFlow
      }
      comment
      checkInfoID
      tireCheckinfo {
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTireProfile = /* GraphQL */ `
  mutation DeleteTireProfile(
    $input: DeleteTireProfileInput!
    $condition: ModelTireProfileConditionInput
  ) {
    deleteTireProfile(input: $input, condition: $condition) {
      id
      name
      number
      image
      tireInfomation
      makerVersion
      measurement {
        tireReplaceJdg
        yearManufacJdg
        recombinIO
        punctureInsp
        alignment
        wheelReplace
        checkFillAir
      }
      status {
        remainGroove
        foreignObjectStab
        unevenWear
        wheelRimBend
        crack
        wheelCorrosion
        separation
        nutSearWear
        airFlow
      }
      comment
      checkInfoID
      tireCheckinfo {
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
