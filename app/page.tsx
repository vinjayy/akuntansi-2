import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BookOpen,
  FileText,
  TrendingUp,
  MessageCircle,
  Calculator,
  Shield,
  Users,
  Zap,
  Clock,
  Lock,
  Mail,
  MapPin,
  MessageSquare,
  Facebook,
  Instagram,
  Linkedin,
  Award,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { WhatsAppButton } from "@/components/whatsapp-button"


interface EmailButtonProps {
  email: string
}

function EmailButton({ email }: EmailButtonProps) {
  return (
    <a
      href={`mailto:${email}`}
      className="fixed bottom-20 right-6 bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-3 shadow-lg transition-all hover:scale-110 z-50 flex items-center space-x-2"      
      aria-label="Send Email"
    >
      <Mail className="w-6 h-6" />
      <span className="text-sm font-medium whitespace-nowrap">Email Kami</span>
    </a>
  )
}

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-start">
          {/* Logo + Text centered */}
          <div className="flex items-center space-x-5">
            <Image
              src="/logo.png?height=40&width=120"
              alt="Accelerate Indonesia Logo"
              width={200}
              height={80}
              className="h-16 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-[#2D5A27]">Accelerate Indonesia</h1>
              <p className="text-sm text-gray-600">Accounting Solutions for Your Business</p>
            </div>
          </div>

          
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2D5A27] via-[#2D5A27] to-[#7FB77E] text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
          <div className="relative h-full">
            <Image
              src="/foto-1.jpeg?height=600&width=800"
              alt="Professional accounting team working"
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#2D5A27]/80"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-6">
              <Award className="w-8 h-8 text-[#7FB77E]" />
              <span className="text-lg font-medium text-gray-200">Terpercaya sejak 2020</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Solusi Akuntansi Handal untuk{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                Pertumbuhan Bisnis Anda
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Kami menyediakan layanan akuntansi profesional yang membantu bisnis Anda tetap tertib secara finansial dan
              siap untuk berkembang.
            </p>

            {/* Remove stats section */}

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#7FB77E] hover:bg-[#5D8C5A] text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                asChild
              >
                <Link href="https://wa.me/6282112722049" target="_blank" rel="noopener noreferrer">
                  Konsultasi Gratis
                </Link>              
                </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-[#7FB77E] hover:bg-white hover:text-[#2D5A27] px-8 py-4 text-lg rounded-lg transition-all duration-300"
                asChild
              >
                <Link href="#services">Lihat Layanan</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A27] mb-4">Layanan Kami</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Solusi lengkap untuk kebutuhan akuntansi dan keuangan bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/foto-5.jpeg?height=200&width=400"
                  alt="Bookkeeping services"
                  fill
                  className="object-cover object-[50%_40%] group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#7FB77E] to-[#2D5A27] rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-[#2D5A27]">Jasa Pembukuan</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Kami mencatat transaksi keuangan secara sistematis dan rapi sesuai dengan standar akuntansi yang
                  berlaku di Indonesia (SAK).
                </CardDescription>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/foto-3.jpeg?height=200&width=400"
                  alt="Financial reports"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#7FB77E] to-[#2D5A27] rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-[#2D5A27]">Penyusunan Laporan Keuangan</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Pembuatan laporan laba rugi, neraca, arus kas, dan laporan ekuitas yang siap untuk diaudit atau
                  dianalisis oleh manajemen.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/foto-4.jpeg?height=200&width=400"
                  alt="Bank reconciliation"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#7FB77E] to-[#2D5A27] rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-[#2D5A27]">Rekonsiliasi Bank & Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Membantu memastikan semua transaksi keuangan tercatat dan sesuai dengan data bank serta menjaga
                  stabilitas arus kas.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Service 4 */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/foto-2.jpeg?height=200&width=400"
                  alt="Financial consultation"
                  fill
                  className="object-cover object-[50%_20%] group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#7FB77E] to-[#2D5A27] rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-[#2D5A27]">Konsultasi Akuntansi & Keuangan</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Diskusi dan bimbingan untuk memahami kondisi keuangan dan pengambilan keputusan strategis.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Service 5 */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden md:col-span-2 lg:col-span-1">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/foto-1.jpeg?height=200&width=400"
                  alt="Tax preparation"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#7FB77E] to-[#2D5A27] rounded-full flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-[#2D5A27]">Persiapan Pajak & Pelaporan SPT</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Mendukung kelancaran pelaporan pajak bulanan dan tahunan untuk badan usaha.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/foto-2.jpeg?height=500&width=600"
                alt="Professional accounting team"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#7FB77E] mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A27] mb-6">Tim Profesional yang Berpengalaman</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Dengan pengalaman lebih dari 5 tahun di bidang akuntansi, tim kami terdiri dari akuntan bersertifikat
                dan profesional yang memahami kebutuhan bisnis Indonesia.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Akuntan bersertifikat dengan pengalaman industri</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Menggunakan software akuntansi terbaru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Pelaporan real-time dan transparan</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Keamanan data tingkat enterprise</span>
                </div>
              </div>

              <Button
                className="bg-[#7FB77E] hover:bg-[#5D8C5A] text-white px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
                asChild
              >
                                <Link href="https://wa.me/6282112722049" target="_blank" rel="noopener noreferrer">
                  Konsultasi Gratis
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A27] mb-4">Mengapa Memilih Kami?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Keunggulan yang membuat kami menjadi pilihan terbaik untuk kebutuhan akuntansi bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Reason 1 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#7FB77E] hover:border-l-[#2D5A27] h-full">
              <CardHeader className="flex flex-row items-start space-y-0 pb-4 min-h-[120px]">
                <div className="w-12 h-12 bg-gradient-to-br from-[#7FB77E] to-[#2D5A27] rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl text-[#2D5A27] mb-3 leading-tight">
                    Segregation of Duty yang Sehat
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-sm">
                    Dengan menggunakan layanan kami, pencatatan keuangan dilakukan oleh tim profesional dan independen
                    di luar organisasi Anda. Ini membantu meminimalkan risiko kecurangan dan memastikan adanya pemisahan
                    yang jelas.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>

            {/* Reason 2 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#7FB77E] hover:border-l-[#2D5A27] h-full">
              <CardHeader className="flex flex-row items-start space-y-0 pb-4 min-h-[120px]">
                <div className="w-12 h-12 bg-gradient-to-br from-[#7FB77E] to-[#2D5A27] rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl text-[#2D5A27] mb-3 leading-tight">
                    Tim Profesional & Independen
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-sm">
                    Kami terdiri dari tenaga akuntan yang berpengalaman dan terlatih, memastikan pencatatan dilakukan
                    sesuai standar dan tanpa konflik kepentingan.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>

            {/* Reason 3 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#7FB77E] hover:border-l-[#2D5A27] h-full">
              <CardHeader className="flex flex-row items-start space-y-0 pb-4 min-h-[120px]">
                <div className="w-12 h-12 bg-gradient-to-br from-[#7FB77E] to-[#2D5A27] rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl text-[#2D5A27] mb-3 leading-tight">
                    Otomasi Proses Administrasi
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-sm">
                    Kami mendukung efisiensi kerja dengan sistem otomasi: monitoring tagihan, pengingat penagihan
                    otomatis via email, dan dashboard laporan keuangan yang mudah diakses.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>

            {/* Reason 4 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#7FB77E] hover:border-l-[#2D5A27] h-full">
              <CardHeader className="flex flex-row items-start space-y-0 pb-4 min-h-[120px]">
                <div className="w-12 h-12 bg-gradient-to-br from-[#7FB77E] to-[#2D5A27] rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl text-[#2D5A27] mb-3 leading-tight">Efisiensi Biaya dan Waktu</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-sm">
                    Dengan sistem yang terstruktur dan teknologi pendukung, Anda dapat mengurangi beban kerja internal
                    dan fokus pada pengembangan bisnis.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>

            {/* Reason 5 - Full width */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#7FB77E] hover:border-l-[#2D5A27] md:col-span-2 h-full">
              <CardHeader className="flex flex-row items-start space-y-0 pb-4 min-h-[120px]">
                <div className="w-12 h-12 bg-gradient-to-br from-[#7FB77E] to-[#2D5A27] rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl text-[#2D5A27] mb-3 leading-tight">
                    Keamanan dan Kerahasiaan Data
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-sm">
                    Kami menjaga kerahasiaan informasi klien dengan ketat melalui prosedur keamanan data yang ketat dan
                    sistem yang terpercaya.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A27] mb-4">Apa Kata Klien Kami</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Testimoni dari berbagai klien yang telah merasakan manfaat layanan kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Client testimonial"
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#2D5A27]">Irawan</h4>
                    <p className="text-sm text-gray-600">Direktur PT. Global Multisentosa</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  "Accelerate Indonesia membantu kami mengelola keuangan dengan sangat profesional. Laporan yang
                  disajikan sangat detail dan mudah dipahami."
                </p>
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>★</span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Client testimonial"
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#2D5A27]">Frendi</h4>
                    <p className="text-sm text-gray-600">Owner, Ejo Shop</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  "Sejak menggunakan jasa Accelerate Indonesia, kami tidak perlu khawatir lagi dengan masalah pembukuan
                  dan pajak. Semuanya ditangani dengan baik."
                </p>
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>★</span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Client testimonial"
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#2D5A27]">Mega</h4>
                    <p className="text-sm text-gray-600">Owner, TB Niaga Jaya</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  "Tim yang sangat responsif dan professional. Mereka selalu memberikan saran yang tepat untuk
                  pengembangan bisnis kami."
                </p>
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>★</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      

      {/* Footer */}
      <footer className="bg-[#2D5A27] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                  <Image src="/logo.png" alt="Logo Accelerate" width={40} height={40} className="object-contain" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Accelerate Indonesia</h3>
                  <p className="text-gray-300">Accounting Solutions for Your Business</p>
                </div>
              </div>
                            <p className="text-gray-300 text-sm">

                © {new Date().getFullYear()} Accelerate Indonesia. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Add floating WhatsApp button */}
      <WhatsAppButton phoneNumber="6282112722049" />

            {/* Add floating Email button */}
      <EmailButton email="accelerate.indo38@gmail.com" />
    </div>
  )
}

export default HomePage
