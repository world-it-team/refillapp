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
export const onCreateTireCheckinfo = /* GraphQL */ `
  subscription OnCreateTireCheckinfo {
    onCreateTireCheckinfo {
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
export const onUpdateTireCheckinfo = /* GraphQL */ `
  subscription OnUpdateTireCheckinfo {
    onUpdateTireCheckinfo {
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
export const onDeleteTireCheckinfo = /* GraphQL */ `
  subscription OnDeleteTireCheckinfo {
    onDeleteTireCheckinfo {
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
export const onCreateTireProfile = /* GraphQL */ `
  subscription OnCreateTireProfile {
    onCreateTireProfile {
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
export const onUpdateTireProfile = /* GraphQL */ `
  subscription OnUpdateTireProfile {
    onUpdateTireProfile {
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
export const onDeleteTireProfile = /* GraphQL */ `
  subscription OnDeleteTireProfile {
    onDeleteTireProfile {
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
