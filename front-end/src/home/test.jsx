import { Box, Button, chakra, Container, Flex, Grid, Heading, HStack, Image, Link, Text, VStack, Card } from "@chakra-ui/react";

function MountainIcon(props) {
  return (
    <chakra.svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <chakra.path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </chakra.svg>
  );
}

export default function HomePage() {
  return (
    <Flex flexDir="column" minH="100vh">
      <Box as="header" px={{ base: 4, lg: 6 }} h="14" display="flex" alignItems="center">
        <Link display="flex" alignItems="center" justifyContent="center" href="#">
          <MountainIcon h="6" w="6" />
          <chakra.span srOnly>Moroccan Training Platform</chakra.span>
        </Link>
        <HStack as="nav" ml="auto" spacing={{ base: 4, sm: 6 }}>
          <Link fontSize="sm" fontWeight="medium" _hover={{ textDecoration: "underline", textUnderlineOffset: 4 }} href="#">
            Features
          </Link>
          <Link fontSize="sm" fontWeight="medium" _hover={{ textDecoration: "underline", textUnderlineOffset: 4 }} href="#">
            Testimonials
          </Link>
          <Link fontSize="sm" fontWeight="medium" _hover={{ textDecoration: "underline", textUnderlineOffset: 4 }} href="#">
            Partners
          </Link>
          <Link fontSize="sm" fontWeight="medium" _hover={{ textDecoration: "underline", textUnderlineOffset: 4 }} href="#">
            Contact
          </Link>
        </HStack>
      </Box>
      <Box as="main" flex="1">
        <Box as="section" py={{ base: 12, md: 24, lg: 32, xl: 48 }} w="full">
          <Container px={{ base: 4, md: 6 }}>
            <Grid templateColumns={{ lg: "1fr 400px", xl: "1fr 600px" }} gap={{ lg: 12 }}>
              <VStack align="start" justify="center" spacing={4}>
                <VStack spacing={2}>
                  <Heading as="h1" fontSize={{ base: "3xl", sm: "5xl", xl: "6xl" }} fontWeight="bold" letterSpacing="tighter">
                    Empower Your Business with Continuous Training
                  </Heading>
                  <Text maxW="600px" color="gray.500" fontSize={{ md: "xl" }} _dark={{ color: "gray.400" }}>
                    Our platform provides Moroccan companies with comprehensive training and technical assistance services to help you stay ahead in a rapidly evolving market.
                  </Text>
                </VStack>
                <HStack spacing={2} flexDir={{ base: "column", minW: "400px" }} alignItems="stretch">
                  <Button
                    as={Link}
                    href="#"
                    h="10"
                    bg="gray.900"
                    color="gray.50"
                    px={8}
                    fontSize="sm"
                    fontWeight="medium"
                    shadow="md"
                    _hover={{ bg: "gray.900Alpha.90" }}
                    _focusVisible={{ outline: "none", ring: 1, ringColor: "gray.950" }}
                    _dark={{ bg: "gray.50", color: "gray.900", _hover: { bg: "gray.50Alpha.90" }, _focusVisible: { ringColor: "gray.300" } }}
                  >
                    Get Started
                  </Button>
                  <Button
                    as={Link}
                    href="#"
                    h="10"
                    border="1px"
                    borderColor="gray.200"
                    bg="white"
                    px={8}
                    fontSize="sm"
                    fontWeight="medium"
                    shadow="sm"
                    _hover={{ bg: "gray.100", color: "gray.900" }}
                    _focusVisible={{ outline: "none", ring: 1, ringColor: "gray.950" }}
                    _dark={{ borderColor: "gray.800", bg: "gray.950", _hover: { bg: "gray.800", color: "gray.50" }, _focusVisible: { ringColor: "gray.300" } }}
                  >
                    Learn More
                  </Button>
                </HStack>
              </VStack>
              <Image
                alt="Hero"
                mx="auto"
                rounded="xl"
                objectFit="cover"
                objectPosition="center"
                src="https://picsum.photos/550/550"
                height="550px"
                width="550px"
              />
            </Grid>
          </Container>
        </Box>
        <Box as="section" py={{ base: 12, md: 24, lg: 32 }} w="full" bg="gray.100" _dark={{ bg: "gray.800" }}>
          <Container px={{ base: 4, md: 6 }}>
            <VStack spacing={4} textAlign="center">
              <VStack spacing={2}>
                <Box display="inline-block" bg="gray.100" px={3} py={1} rounded="lg" fontSize="sm" _dark={{ bg: "gray.800" }}>
                  Key Features
                </Box>
                <Heading as="h2" fontSize={{ base: "3xl", sm: "5xl" }} fontWeight="bold" letterSpacing="tighter">
                  Elevate Your Business with Our Platform
                </Heading>
                <Text maxW="900px" color="gray.500" fontSize={{ md: "xl", lg: "base", xl: "xl" }} _dark={{ color: "gray.400" }}>
                  Our platform offers a comprehensive suite of services to help Moroccan companies stay competitive and adapt to the changing market.
                </Text>
              </VStack>
            </VStack>
            <Grid maxW="5xl" mx="auto" templateColumns={{ lg: "repeat(2, 1fr)" }} gap={12} py={12}>
              <VStack align="start" spacing={4}>
                <VStack spacing={6}>
                  <VStack spacing={1} align="start">
                    <Heading as="h3" fontSize="xl" fontWeight="bold">
                      Service Management
                    </Heading>
                    <Text color="gray.500" _dark={{ color: "gray.400" }}>
                      Streamline your service delivery with our intuitive management tools.
                    </Text>
                  </VStack>
                  <VStack spacing={1} align="start">
                    <Heading as="h3" fontSize="xl" fontWeight="bold">
                      Monitoring and Analytics
                    </Heading>
                    <Text color="gray.500" _dark={{ color: "gray.400" }}>
                      Stay on top of your business performance with our comprehensive monitoring and analytics.
                    </Text>
                  </VStack>
                  <VStack spacing={1} align="start">
                    <Heading as="h3" fontSize="xl" fontWeight="bold">
                      Skills Development
                    </Heading>
                    <Text color="gray.500" _dark={{ color: "gray.400" }}>
                      Empower your team with our tailored training programs and workshops.
                    </Text>
                  </VStack>
                </VStack>
              </VStack>
              <Image
                alt="Image"
                mx="auto"
                rounded="xl"
                objectFit="cover"
                objectPosition="center"
                src="https://picsum.photos/550/310"
                height="310px"
                width="550px"
              />
            </Grid>
          </Container>
        </Box>
        <Box as="section" py={{ base: 12, md: 24, lg: 32 }} w="full">
          <Container textAlign="center" px={{ base: 4, md: 6 }}>
            <VStack spacing={3}>
              <Box display="inline-block" bg="gray.100" px={3} py={1} rounded="lg" fontSize="sm" _dark={{ bg: "gray.800" }}>
                Testimonials
              </Box>
              <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" letterSpacing="tighter">
                What Our Clients Say
              </Heading>
              <Text maxW="600px" mx="auto" color="gray.500" fontSize={{ md: "xl", lg: "base", xl: "xl" }} _dark={{ color: "gray.400" }}>
                Hear from the businesses that have transformed their operations with our platform.
              </Text>
            </VStack>
            <Grid w="full" maxW="4xl" mx="auto" templateColumns={{ sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }} gap={6} py={12}>
              <Card>
                <Box className="space-y-4">
                  <VStack spacing={2}>
                    <Text fontSize="lg" fontWeight="medium">
                      "The training programs have been invaluable in upskilling our team."
                    </Text>
                    <Text color="gray.500" _dark={{ color: "gray.400" }}>
                      - Fatima Benali, HR Manager, Casablanca Logistics
                    </Text>
                  </VStack>
                  <HStack spacing={2}>
                    <Image
                      alt="Avatar"
                      rounded="full"
                      objectFit="cover"
                      src="https://picsum.photos/40/40"
                      height="40px"
                      width="40px"
                    />
                    <VStack align="start" spacing={0}>
                      <Text fontWeight="medium">Fatima Benali</Text>
                      <Text fontSize="sm" color="gray.500" _dark={{ color: "gray.400" }}>
                        HR Manager, Casablanca Logistics
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
              </Card>
              <Card>
                <Box className="space-y-4">
                  <VStack spacing={2}>
                    <Text fontSize="lg" fontWeight="medium">
                      "The platform's monitoring and analytics have helped us identify areas for improvement."
                    </Text>
                    <Text color="gray.500" _dark={{ color: "gray.400" }}>
                      - Ahmed Khalid, CEO, Marrakech Manufacturing
                    </Text>
                  </VStack>
                  <HStack spacing={2}>
                    <Image
                      alt="Avatar"
                      rounded="full"
                      objectFit="cover"
                      src="https://picsum.photos/40/40"
                      height="40px"
                      width="40px"
                    />
                    <VStack align="start" spacing={0}>
                      <Text fontWeight="medium">Ahmed Khalid</Text>
                      <Text fontSize="sm" color="gray.500" _dark={{ color: "gray.400" }}>
                        CEO, Marrakech Manufacturing
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
              </Card>
              <Card>
                <Box className="space-y-4">
                  <VStack spacing={2}>
                    <Text fontSize="lg" fontWeight="medium">
                      "The platform's service management tools have streamlined our operations."
                    </Text>
                    <Text color="gray.500" _dark={{ color: "gray.400" }}>
                      - Rachid Saidi, Operations Manager, Agadir Textiles
                    </Text>
                  </VStack>
                  <HStack spacing={2}>
                    <Image
                      alt="Avatar"
                      rounded="full"
                      objectFit="cover"
                      src="https://picsum.photos/40/40"
                      height="40px"
                      width="40px"
                    />
                    <VStack align="start" spacing={0}>
                      <Text fontWeight="medium">Rachid Saidi</Text>
                      <Text fontSize="sm" color="gray.500" _dark={{ color: "gray.400" }}>
                        Operations Manager, Agadir Textiles
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
              </Card>
            </Grid>
          </Container>
        </Box>
        <Box as="section" py={{ base: 12, md: 24, lg: 32 }} w="full" borderTop="1px">
          <Container textAlign="center" px={{ base: 4, md: 6 }}>
            <VStack spacing={3}>
              <Box display="inline-block" bg="gray.100" px={3} py={1} rounded="lg" fontSize="sm" _dark={{ bg: "gray.800" }}>
                Our Partners
              </Box>
              <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" letterSpacing="tighter">
                Trusted by Leading Moroccan Businesses
              </Heading>
              <Text maxW="600px" mx="auto" color="gray.500" fontSize={{ md: "xl", lg: "base", xl: "xl" }} _dark={{ color: "gray.400" }}>
                Our platform is trusted by some of the most respected companies in Morocco.
              </Text>
            </VStack>
            <Grid w="full" maxW="5xl" mx="auto" templateColumns={{ sm: "repeat(3, 1fr)", md: "repeat(5, 1fr)" }} gap={8}>
              <Image
                alt="Logo"
                rounded="lg"
                objectFit="contain"
                objectPosition="center"
                src="https://picsum.photos/140/70"
                height="70px"
                width="140px"
              />
              <Image
                alt="Logo"
                rounded="lg"
                objectFit="contain"
                objectPosition="center"
                src="https://picsum.photos/140/70"
                height="70px"
                width="140px"
              />
              <Image
                alt="Logo"
                rounded="lg"
                objectFit="contain"
                objectPosition="center"
                src="https://picsum.photos/140/70"
                height="70px"
                width="140px"
              />
              <Image
                alt="Logo"
                rounded="lg"
                objectFit="contain"
                objectPosition="center"
                src="https://picsum.photos/140/70"
                height="70px"
                width="140px"
              />
              <Image
                alt="Logo"
                rounded="lg"
                objectFit="contain"
                objectPosition="center"
                src="https://picsum.photos/140/70"
                height="70px"
                width="140px"
              />
            </Grid>
          </Container>
        </Box>
      </Box>
      <Box as="footer" display="flex" flexDir={{ base: "column", sm: "row" }} py={6} w="full" alignItems="center" px={{ base: 4, md: 6 }} borderTop="1px">
        <Text fontSize="xs" color="gray.500" _dark={{ color: "gray.400" }}>
          © 2024 Moroccan Training Platform. All rights reserved.
        </Text>
        <HStack as="nav" ml={{ sm: "auto" }} spacing={{ base: 4, sm: 6 }}>
          <Link fontSize="xs" _hover={{ textDecoration: "underline", textUnderlineOffset: 4 }} href="#">
            Terms of Service
          </Link>
          <Link fontSize="xs" _hover={{ textDecoration: "underline", textUnderlineOffset: 4 }} href="#">
            Privacy Policy
          </Link>
        </HStack>
      </Box>
    </Flex>
  );
}
