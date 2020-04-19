-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 19, 2020 at 07:09 AM
-- Server version: 5.7.29
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `negocios_conectados`
--

-- --------------------------------------------------------

--
-- Table structure for table `comercios`
--

DROP TABLE IF EXISTS `comercios`;
CREATE TABLE IF NOT EXISTS `comercios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `tipo` int(11) NOT NULL,
  `descripcion` varchar(512) COLLATE utf8_unicode_ci DEFAULT NULL,
  `telefono1` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `telefono2` varchar(128) COLLATE utf8_unicode_ci DEFAULT NULL,
  `contacto` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `face` varchar(512) COLLATE utf8_unicode_ci DEFAULT NULL,
  `horario` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `ubicacion` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `likes` int(11) NOT NULL,
  `dislikes` int(11) NOT NULL,
  `imagen` varchar(512) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fechaIngreso` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `comercios`
--

INSERT INTO `comercios` (`id`, `nombre`, `tipo`, `descripcion`, `telefono1`, `telefono2`, `contacto`, `face`, `horario`, `ubicacion`, `likes`, `dislikes`, `imagen`, `fechaIngreso`) VALUES
(1, 'Salón de belleza Elena', 1, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore hic perspiciatis vero tenetur beatae sint atque esse quod.', '22334455', NULL, 'Elena Prado', 'https://www.facebook.com/saladebellezamarme/', 'Lunes a sábado de 7 am - 3 pm', 'Casa 27D ', 15, 2, 'belleza.png', '2020-04-19 06:28:48'),
(2, 'Reparaciones El Macho Bueno', 1, 'Le reparamos desde su oola arrocera hasta su televisor. 100% garantizado', '22334455', NULL, 'Elena Prado', 'https://www.facebook.com/saladebellezamarme/', 'Lunes a sábado de 7 am - 3 pm', 'Casa 27D ', 15, 2, 'vendedor.png', '2020-04-19 06:28:48'),
(3, 'El Gallo Veloz', 1, 'Le reparamos desde su oola arrocera hasta su televisor. 100% garantizado', '22334455', NULL, 'Elena Prado', 'https://www.facebook.com/saladebellezamarme/', 'Lunes a sábado de 7 am - 3 pm', 'Casa 27D ', 15, 2, 'mensajero.png', '2020-04-19 06:28:48'),
(4, 'Dulces momentos', 1, 'Le reparamos desde su oola arrocera hasta su televisor. 100% garantizado', '22334455', NULL, 'Elena Prado', 'https://www.facebook.com/saladebellezamarme/', 'Lunes a sábado de 7 am - 3 pm', 'Casa 27D ', 15, 2, 'postre.png', '2020-04-19 06:28:48');

-- --------------------------------------------------------

--
-- Table structure for table `tipos`
--

DROP TABLE IF EXISTS `tipos`;
CREATE TABLE IF NOT EXISTS `tipos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombreTipo` varchar(128) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tipos`
--

INSERT INTO `tipos` (`id`, `nombreTipo`) VALUES
(1, 'Pulpería'),
(2, 'Panadería'),
(3, 'Super/miniSuper'),
(4, 'Verdulería'),
(5, 'Farmacia'),
(6, 'Ferretería'),
(7, 'Veterinaria'),
(8, 'Carnicería'),
(9, 'Soda/Restaurant'),
(10, 'Otro'),
(11, 'Salud'),
(12, 'Belleza/estética'),
(13, 'Librería'),
(14, 'Bazar'),
(15, 'Lavacar'),
(16, 'Lavandería'),
(17, 'Mecánico automotriz'),
(18, 'Tiendas/Ropa/Calzado');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
