const usersSchema = {
  username: 'string',
  password: 'string',
  email: 'string',
  role: 'string',
  createdAt: 'timestamp',
  updatedAt: 'timestamp',
};

const tourDatesSchema = {
  venue: 'string',
  description: 'string',
  location: 'string',
  date: 'string',
  isAvailable: 'boolean',
  isSoldout: 'boolean',
  pricing: [
    {
      tierName: 'string',
      price: 'number',
      quantity: 'number',
    },
  ],
  createdAt: 'timestamp',
  updatedAt: 'timestamp',
};

const schedulesSchema = {
  eventName: 'string',
  description: 'string',
  startTime: 'string',
  endTime: 'string',
  isAvailable: 'boolean',
  date: 'string',
  attendees: 'number',
  maxAttendees: 'number',
  pricing: 'number',
  createdAt: 'timestamp',
  updatedAt: 'timestamp',
};

const superUserStatisticsSchema = {
  totalVideos: 'number',
  totalViews: 'number',
  averageViews: 'number',
  highestViewed: 'number',
  videoId: 'reference',
  totalAttendees: 'number',
  averageAttendees: 'number',
  highestAttendees: 'number',
  streamId: 'reference',
  earnings: 'number',
  createdAt: 'timestamp',
  updatedAt: 'timestamp',
};

const transactionsSchema = {
  userId: 'reference',
  amount: 'number',
  eventType: 'string',
  streamId: 'reference',
  tourId: 'reference',
  tier: 'string',
  paymentType: 'string',
  createdAt: 'timestamp',
  updatedAt: 'timestamp',
};

const videosSchema = {
  title: 'string',
  description: 'string',
  event: 'string',
  eventDate: 'string',
  videoLength: 'number',
  views: 'number',
  createdAt: 'timestamp',
  updatedAt: 'timestamp',
  url: 'string',
};
