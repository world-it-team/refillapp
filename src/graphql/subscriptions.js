/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog {
    onUpdateBlog {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog {
    onDeleteBlog {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent {
    onCreateStudent {
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent {
    onUpdateStudent {
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent {
    onDeleteStudent {
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
export const onCreateTireKart = /* GraphQL */ `
  subscription OnCreateTireKart {
    onCreateTireKart {
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
export const onUpdateTireKart = /* GraphQL */ `
  subscription OnUpdateTireKart {
    onUpdateTireKart {
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
export const onDeleteTireKart = /* GraphQL */ `
  subscription OnDeleteTireKart {
    onDeleteTireKart {
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
