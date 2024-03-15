<template>
    <div class="container mx-auto my-8">
        <h1 class="text-4xl font-bold mb-4">Argimes</h1>

        <!-- Introduction -->
        <div class="mb-8">
            <p class="ml-5 mr-5 text-gray-700 text-left text-xl">
                Argimes est un projet que je réalise sur Godot (et Blender) avec un ami. Le principe est simple : nous
                jouons une paysanne qui maîtrise légèrement la magie et qui doit se rendre à la capitale vendre des
                légumes.
                Sauf qu'à cette capitale, c'est le chaos : des monstres difformes s'attaquent aux habitants.
                Le projet est toujours en cours, il en est même à ses débuts. Je vais donc expliquer comment nous
                procédons
                actuellement, et quelles seront nos étapes d'après.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
                <figure>
                    <img src="/img/blender.png" alt="Logo de Blender" class="rounded-md w-[25%] m-auto" />
                    <figcaption class="text-center">Logo d'Unreal Engine 5</figcaption>
                </figure>
                <figure>
                    <img src="/img/godot.png" alt="Logo de Godot" class="rounded-md w-[25%] m-auto" />
                    <figcaption class="text-center">Logo de Godot</figcaption>
                </figure>
            </div>
        </div>

        <div class="mb-8">
            <p class="text-gray-700 ml-5 mr-5 text-left text-xl mb-5">
                D'abord, nous organisons régulièrement des réunions pour faire le point. Ces réunions nous ont permis
                d'établir d'abord quel serait notre premier niveau, son décor, et le rôle de chacun. Elles ont également
                permis d'établir le scénario du premier niveau, de manière très simple : notre personnage veut rendre
                service à sa ferme, et se rendre en ville vendre les légumes recueillis. Et, puisque dans ce monde on
                peut
                retrouver toute sorte de dangers (animaux affamés par exemple), un des personnages va tester notre
                maîtrise
                de la magie avant qu'on y aille pour s'assurer qu'on est suffisament bons. Cela fera office de tutoriel.
            </p>
        </div>

        <div class="mb-8">
            <p class="text-gray-700 ml-5 mr-5 text-left text-xl mb-5">
                Ma tâche à moi, pour le moment, c'est la réalisation du personnage principal et de ses animations. J'ai
                pour
                le moment emprunté un personnage 3D libre de droit, nous discuterons de la nécessité ou non de modéliser
                nous même notre personnage principal.
                En tout cas, pour le moment, la gestion du personnage se fait plutôt bien, sa locomotion est plutôt
                correcte. J'ai intégré ses animations directement via Blender, puis exporté sur Godot. Pendant ce temps,
                mon
                collègue s'occupe de la réalisation du premier niveau.
            </p>
            <figure>
                <video width="720" height="480" controls class="m-auto">
                    <source src="/img/argime_locomotion.mp4" alt="Vidéo de la locomotion du personnage principal."
                        class="rounded-md w-full h-auto" />
                </video>
                <figcaption class="text-center">Vidéo mettant en avant la locomotion du personnage principal (animation
                    d'attente, de marche).</figcaption>
            </figure>
        </div>

        <div class="mb-8">
            <p class="text-gray-700 ml-5 mr-5 text-left text-xl mb-5">
                Lors du quatrième semestre de ma formation en BUT MMI, j'ai eu l'occasion de travailler sur ce projet.
                j'ai donc réalisé un niveau pensé pour être un noveau de transition, entre le territoire de base (zone
                des magiciens) et la terre Bannie, territoire d'exil et en guerre avec Argicar, zone des magiciens. Le
                but, c'était de montrer la transition entre magiciens et celleux qui sont appelés démons, via un second
                corps supposé les repréenter en appuyant sur une autre touche. J'ai donc mis en palce toute la logique
                autour de ça pour le jeu, mais je dois revoir les personnages et les représentations spectrales : il me
                faudrait le temps de travailler modélisation et textures.
            </p>
            <figure>
                <video width="720" height="480" controls class="m-auto">
                    <source src="/img/Demo.mp4"
                        alt="Vidéo du niveau de transition entre le territoire allié et le territoire ennemi"
                        class="rounded-md w-full h-auto" />
                </video>
                <figcaption class="text-center">Niveau de transition</figcaption>
            </figure>
        </div>

        <div class="mb-8">
            <p class="text-gray-700 ml-5 mr-5 text-left text-xl mb-5">
                C'est globalement là où nous en sommes à l'heure actuelle. L'étape d'après, ce sera la modélisation de
                personnages spécifiques à notre jeu et des combats pour moi, et la réflexion sur la suite du scénario
                pour mon collègue.
            </p>
            <figure>
                <img src="/img/argime_project.png" alt="Image du paramétrage de mon personnage"
                    class="rounded-md w-[50%] m-auto" />
                <figcaption class="text-center">Paramétrages de mon personnage</figcaption>
            </figure>
        </div>

        <!-- Conclusion -->
        <p class="text-gray-700 ml-5 mr-5 text-left text-xl">
            À travers la réalisation de ce projet, notre objectif est d'acquérir une expertise plus approfondie dans
            l'utilisation des outils tels que Godot et Blender, deux éléments fondamentaux dans le processus de création
            de
            jeux vidéo. Notre intention est de démontrer de manière significative notre savoir-faire dans le domaine du
            développement de jeux vidéo. Ce projet constitue donc une opportunité unique de développer nos compétences
            techniques, de repousser les limites de notre créativité et, finalement, de consolider notre position en
            tant
            que professionnels compétents et passionnés dans le domaine du jeu vidéo.
        </p>
    </div>
</template>