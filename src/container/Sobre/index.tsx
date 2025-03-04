import React from "react";
import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import { GithubSecao } from "../Sobre/styles";

const Sobre = () => {
  return (
    <section>
      <Titulo fontSize={16}>Sobre Mim</Titulo>
      <Paragrafo tipo="principal">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur magni, blanditiis quibusdam dolor fuga recusandae quo laboriosam adipisci totam architecto voluptatibus voluptatem soluta, consequatur excepturi explicabo sunt molestias est deleniti!
      </Paragrafo>
      <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=EduOliveira29&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=EduOliveira29&layout=compact&langs_count=7&theme=dracula"/>
      </GithubSecao>
    </section>
  )
}

export default Sobre;
