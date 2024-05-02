interface Member{
  id: string,
  name: string,
  email: string,
  phone: string,
  membership: string,
  avatar: string,
  membershipTime: string,
  status: string,
}

interface MemberToSend extends Member{
  lastname: string,
  dateOfBirth: Date,
  address: string,
  genre: string,
  id_card: string,
  membershipId: number,
}