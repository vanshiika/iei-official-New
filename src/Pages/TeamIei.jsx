import React from 'react'
import '../styles/team.css'
import TeamName from '../components/TeamName'
import MemberCard from '../components/MemberCard'
import {webTeam} from '../utils/teamData'

function TeamIei() {
  return (
    <div className='min-h-screen bg-[#121212] sm:px-20 xl:px-36 px-10 py-10 '>
      <h1 className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
        Meet Our Team
      </h1>
      <h1 className="orange_gradient font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        Team IE(I)
      </h1>
      <section className="flex flex-col justify-center items-center py-10">
        <TeamName name="Web Team"/>
        <div className='mt-20 flex flex-wrap gap-10 justify-center'>
          {webTeam.map((member, index) => (<MemberCard name={member.name} imgUrl={member.imgUrl} position={member.position} socialLinks={member.socialLinks} index={index}/>))}
        </div>
      </section>
    </div>
  )
}

export default TeamIei