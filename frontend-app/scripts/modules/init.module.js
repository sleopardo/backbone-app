'use strict';

SantiApp.module('Init', function (Init, SantiApp, Backbone, Marionette, $, _) {

    // Set methods and properties that you need to use from any place of your application
    // Here start the application router, in consecuense also the rest of application.
    SantiApp.tattoosCollection = null;

    SantiApp.getCategories = function () {
        return [
            {
                "name": "Angel tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Bird tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Butterfly tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Celebrity tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Chinese tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Cross tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Dragon tattoos",
                "id": "31",
                "description": "Dragon Tattoos are very popular among men. Another common tattoo is the tribal dragon. The dragon tattoo design makes a unique and powerful personal statement for the individual who chooses it for self-expression in body art. Dragon Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Dreamcatcher tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Eye tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Fairy tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Feather tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Flower tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Heart tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Infinity tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Japanese tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Koi Fish tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Lettering tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Love tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Music tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Quote tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Religious tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Rose tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Skull tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Star tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Swallow tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Traditional tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Tribal tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Zodiac tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Zombie tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Tattoos for couples",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Tattoos for girls",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Tattoos for men",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Wing Tattooss",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            }
        ]

    };

    SantiApp.getTattoos = function (id) {
        return [
            {
                "name": "Angel tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Bird tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Butterfly tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Celebrity tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Chinese tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Cross tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Dragon tattoos",
                "id": "31",
                "description": "Dragon Tattoos are very popular among men. Another common tattoo is the tribal dragon. The dragon tattoo design makes a unique and powerful personal statement for the individual who chooses it for self-expression in body art. Dragon Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Dreamcatcher tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Eye tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Fairy tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Feather tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Flower tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Heart tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Infinity tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Japanese tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Koi Fish tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Lettering tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Love tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Music tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Quote tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Religious tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Rose tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Skull tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Star tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Swallow tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Traditional tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Tribal tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Zodiac tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Zombie tattoos",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Tattoos for couples",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Tattoos for girls",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Tattoos for men",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            },
            {
                "name": "Wing Tattooss",
                "id": "1",
                "description": "Star tattoos a very popular for both men and women. Star tattoos designs usually are cheap, easy to make and look great. One of the most popular versions star tattoo designs are nautical stars. Typically the sailors use the North Star to help them navigate the waters of the open ocean. Another popular design motif that include stars as the shooting star tattoo. For more information of star tattoos visit our post 65 Star tattoos for women and men and 40 Star Tattoo Ideas for Men and Women. Star Tattoos design ideas, ink, coolest tattoos, small and tribal."
            }
        ]

    };

    /**
     * Initializer router
     * Get the App up and running by initializing the mediator
     * when the the application is started.
     */
    Init.addInitializer(function(){
        new SantiApp.Router();
    });

});
