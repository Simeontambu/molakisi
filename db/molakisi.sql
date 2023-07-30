-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 25, 2023 at 11:06 AM
-- Server version: 8.0.31
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `molakisi`
--

-- --------------------------------------------------------

--
-- Table structure for table `candidature`
--

-- DROP TABLE IF EXISTS `candidature`;
CREATE TABLE IF NOT EXISTS `candidature` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `postnom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `sexe` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `montant` varchar(20) NOT NULL,
  `anneExp` varchar(50) NOT NULL,
  `file` varchar(100) NOT NULL,
  `cours` varchar(50) NOT NULL,
  `ecole` varchar(50) NOT NULL,
  `photo` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `candidature`
--

INSERT INTO `candidature` (`id`, `nom`, `postnom`, `prenom`, `sexe`, `email`, `phone`, `montant`, `anneExp`, `file`, `cours`, `ecole`, `photo`) VALUES
(4, 'kongo', 'mpayate', 'herve', 'masculin', 'herve@gmail.com', '0812808199', '2 ans', '2', 'Ch1-Intro-IA-IFT6261-H-11.pdf', 'j', 'j', 'DSC_0371.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `registereleve`
--

DROP TABLE IF EXISTS `registereleve`;
CREATE TABLE IF NOT EXISTS `registereleve` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `postnom` varchar(50) NOT NULL,
  `sexe` varchar(12) NOT NULL,
  `naissance` varchar(50) NOT NULL,
  `classe` varchar(50) NOT NULL,
  `sujet` varchar(100) NOT NULL,
  `objectif` varchar(100) NOT NULL,
  `adresse` varchar(100) NOT NULL,
  `tuters` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phoneP` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `registereleve`
--

INSERT INTO `registereleve` (`id`, `nom`, `prenom`, `postnom`, `sexe`, `naissance`, `classe`, `sujet`, `objectif`, `adresse`, `tuters`, `email`, `phoneP`) VALUES
(1, 'j', 'j', 'j', 'h', '1112-11-11', 'k', 'j', 'k', 'kk', 'nn', 'herve@gmail.com', '232233');

-- --------------------------------------------------------

--
-- Table structure for table `tuteur`
--

DROP TABLE IF EXISTS `tuteur`;
CREATE TABLE IF NOT EXISTS `tuteur` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tuteur`
--

INSERT INTO `tuteur` (`id`, `name`, `prenom`, `email`, `password`) VALUES
(1, 'kongo', 'herve', 'hervekongo.hk@gmail.com', '$2a$08$Typw.i.jnTWGlAwBCfTF1.tDzhsqekvfue5qbV9Se2oHzET8g6M7O'),
(2, 'masambukidi', 'herve', 'herve@gmail.com', '$2a$08$crquklaAAKbIuBL0e3mZ5OWCXZwxqUIMdSCS8V2LGs85XH0mPC6Xa'),
(3, 'masala', 'joyce', 'joyce2022@gmail.com', '$2a$08$XRjZfiyiBxWinji.T6QgCeIQ32kKsV366MFcnllWDU85K7Zj1tRqC'),
(4, 'samuela', 'herve', 'sam@gmail.com', '$2a$08$T6gvodP0kbyg9ajMbaJJP.jj4o271uCAK9pVMZcz9mKx0450NiIsa'),
(5, 'kadiebwe', 'oscar', 'kadiebweoscar0@gmail.com', '$2a$08$rUge6tN3S2uUWS4EORwEnO83MzHV2ZtRlhco4IPFb0RQQzKquMoie');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `prenom`, `email`, `password`) VALUES
(1, 'Masala', 'Huram', 'molakisibusinessgrouo@gmail.com', '$2a$08$TEEHRiFzecCl2Z2ZLKbNCOe2pB1F3FiDNVFxkNbfFFMC97h82BO9O'),
(2, 'masambukidi', 'samuela', 'samuela@gmail.com', '$2a$08$76RIc2OoL2vV157aSVZvuuB0UozDUCtjHc2/R3PO3pxHP6BQ07smq'),
(3, 'okito', 'micheline', 'okitobibi@gmail.com', '$2a$08$qEHkOh51EAK/.vYcO/t3XO.sK2Akbp4iG411Fh28dMO62tTzu2cjW'),
(4, 'simeon', 'tambu', 'si@gm', '$2a$08$PIiyq/U13ClLlVyjEp.OLedn7D4DrwDV68VMJQUHzivxwbOiOrvX6'),
(5, 'tam', 'sim', 'rubuzleonardo@gmail.com', '$2a$08$g2f5OLFdy/h3/jCo0E0NeuQjDjakZw7jzFc/9h0xi1VC8JVvu3Doe');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `gmail` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
