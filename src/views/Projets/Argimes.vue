<template>
    <div class="container mx-auto my-8">
        <h1 class="text-4xl font-bold mb-4">Argimes</h1>

        <!-- Introduction -->
        <div class="mb-8">
            <p class="ml-5 mr-5 text-gray-700 text-left text-xl">
                Argimes est un projet que je réalise sur Godot (et Blender) avec un ami. Le principe est simple : nous
                jouons une paysanne qui maîtrise légèrement la magie et qui doit se rendre à la capitale vendre des légumes.
                Sauf qu'à cette capitale, c'est le chaos : des monstres difformes s'attaquent aux habitants.
                Le projet est toujours en cours, il en est même à ses débuts. Je vais donc expliquer comment nous procédons
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
                service à sa ferme, et se rendre en ville vendre les légumes recueillis. Et, puisque dans ce monde on peut
                retrouver toute sorte de dangers (animaux affamés par exemple), un des personnages va tester notre maîtrise
                de la magie avant qu'on y aille pour s'assurer qu'on est suffisament bons. Cela fera office de tutoriel.
            </p>
        </div>

        <div class="mb-8">
            <p class="text-gray-700 ml-5 mr-5 text-left text-xl mb-5">
                Ma tâche à moi, pour le moment, c'est la réalisation du personnage principal et de ses animations. J'ai pour
                le moment emprunté un personnage 3D libre de droit, nous discuterons de la nécessité ou non de modéliser
                nous même notre personnage principal.
                En tout cas, pour le moment, la gestion du personnage se fait plutôt bien, sa locomotion est plutôt
                correcte. J'ai intégré ses animations directement via Blender, puis exporté sur Godot. Pendant ce temps, mon
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
                C'est globalement là où nous en sommes à l'heure actuelle. L'étape d'après, ce sera la mise en place de
                l'Intelligence Artificielle et des combats pour moi, et la réflexion sur la suite du scénario pour mon
                collègue. Pour sa mise en place, je vais d'abord la faire discuter avec notre joueur, étant donné qu'elle
                servira du tutoriel au joueur, pour qu'il comprenne le fonctionnement des touches notamment.
                Ensuite, il me faudra paramétrer ses actions en fonction des actions du joueur (parer, attaquer, etc), ainsi
                que paramétrer la caméra afin d'avoir une caméra qui suit le personnage.
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
            l'utilisation des outils tels que Godot et Blender, deux éléments fondamentaux dans le processus de création de
            jeux vidéo. Notre intention est de démontrer de manière significative notre savoir-faire dans le domaine du
            développement de jeux vidéo. Ce projet constitue donc une opportunité unique de développer nos compétences
            techniques, de repousser les limites de notre créativité et, finalement, de consolider notre position en tant
            que professionnels compétents et passionnés dans le domaine du jeu vidéo.
        </p>
</div></template>