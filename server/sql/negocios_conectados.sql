-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 20, 2020 at 02:57 AM
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
  `idComercio` int(64) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `idTipo` int(64) NOT NULL,
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
  PRIMARY KEY (`idComercio`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `comercios`
--

INSERT INTO `comercios` (`idComercio`, `nombre`, `idTipo`, `descripcion`, `telefono1`, `telefono2`, `contacto`, `face`, `horario`, `ubicacion`, `likes`, `dislikes`, `imagen`, `fechaIngreso`) VALUES
(1, 'Salón de belleza Elena', 12, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore hic perspiciatis vero tenetur beatae sint atque esse quod.', '22334455', NULL, 'Elena Prado', 'https://www.facebook.com/saladebellezamarme/', 'Lunes a sábado de 7 am - 3 pm', 'Casa 27D ', 15, 2, 'belleza.png', '2020-04-19 06:28:48'),
(2, 'Reparaciones El Macho Bueno', 22, 'Le reparamos desde su oola arrocera hasta su televisor. 100% garantizado', '22334455', NULL, 'Elena Prado', 'https://www.facebook.com/saladebellezamarme/', 'Lunes a sábado de 7 am - 3 pm', 'Casa 27D ', 15, 2, 'multiservicio.png', '2020-04-19 06:28:48'),
(3, 'El Gallo Veloz', 21, 'Le reparamos desde su oola arrocera hasta su televisor. 100% garantizado', '22334455', NULL, 'Elena Prado', 'https://www.facebook.com/saladebellezamarme/', 'Lunes a sábado de 7 am - 3 pm', 'Casa 27D ', 15, 2, 'mensajero.png', '2020-04-19 06:28:48'),
(4, 'Dulces momentos', 9, 'Le reparamos desde su oola arrocera hasta su televisor. 100% garantizado', '22334455', NULL, 'Elena Prado', 'https://www.facebook.com/saladebellezamarme/', 'Lunes a sábado de 7 am - 3 pm', 'Casa 27D ', 15, 2, 'postre.png', '2020-04-19 06:28:48'),
(5, 'El fogón de Mima', 9, 'Le reparamos desde su oola arrocera hasta su televisor. 100% garantizado', '22334455', NULL, 'Elena Prado', 'https://www.facebook.com/saladebellezamarme/', 'Lunes a sábado de 7 am - 3 pm', 'Casa 27D ', 15, 2, 'comida.png', '2020-04-19 06:28:48');

-- --------------------------------------------------------

--
-- Table structure for table `tipos`
--

DROP TABLE IF EXISTS `tipos`;
CREATE TABLE IF NOT EXISTS `tipos` (
  `idTipo` int(64) NOT NULL AUTO_INCREMENT,
  `nombreTipo` varchar(128) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `descripcionTipo` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `icono` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`idTipo`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tipos`
--

INSERT INTO `tipos` (`idTipo`, `nombreTipo`, `descripcionTipo`, `icono`) VALUES
(4, 'Mascotas', 'Pasear mascotas, Grooming, Veterinaria y más.', 'mascotas'),
(6, 'Ferretería', 'Herramientas, artículos construcción y más.', 'ferreteria'),
(9, 'Comida', 'Desayunos, Comidas rápidas, Tamales, Repostería y más.', 'comida'),
(10, 'Otro', 'Otra categoría no listada.', 'otro'),
(11, 'Salud', 'Medicina, Psicología, Enfermería, Odontología y más.', 'salud'),
(12, 'Belleza', 'Peluquería, Estética, Maquillaje, Uñas y más.', 'belleza'),
(15, 'Lavacar', 'Lavado de automóviles.', 'lavacar'),
(17, 'Mecánica', 'Mecaníca automotriz en general.', 'mecanico'),
(20, 'Corte y confección', 'Confección de prendas, Arreglos y más', 'corte_confeccion'),
(21, 'Mensajería', 'Envío de paquetes, encargos, mandados y más.', 'mensajero'),
(22, 'Multiservicios', 'Construcción, Remodelación, Reparaciones, Pintura y más.', 'multiservicio'),
(23, 'Arte', 'Artesanías, Sublimación, Diseño y más', 'arte'),
(24, 'Decoración', 'Arreglos Florales, adornos y más', 'decoracion'),
(25, 'Transporte', 'Taxi, Transporte Estudiantil, Excursiones y más', 'transporte'),
(27, 'Servicios secretariales', 'Digitación y más.', 'secretaria'),
(28, 'Alquiler', 'Casas, Departamentos, Garajes, Equipo y más.', 'alquiler'),
(29, 'Ventas', 'Catálogos, Ropa, Celulares, Plantas, ventas de Garaje y más.', 'ventas'),
(30, 'Lecciones', 'Académicas, Conducir, Instrumentos y más.', 'lecciones'),
(31, 'Contaduría', 'Servicios Profesionales, Asesorías y más.', 'contaduria'),
(32, 'Servicios de apoyo', 'Empleada doméstica, Niñera, Compañía para Adulto Mayor y más.', 'sericiosapoyo'),
(33, 'Reparaciones', 'Celulares, Computadoras, Electrodomésticos y más.', 'reparaciones');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
